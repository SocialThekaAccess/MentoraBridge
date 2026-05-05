// =============================================
// WooCommerce REST API Configuration
// =============================================
const WC_URL = 'https://mentorabridge.com'
const WC_KEY = 'ck_XXXXXXXXXXXXXXXXXXXX'
const WC_SECRET = 'cs_XXXXXXXXXXXXXXXXXXXX'

export async function verifyToken(token, type) {
  if (!token || !type) {
    return { valid: false, reason: 'invalid' }
  }

  try {
    const credentials = btoa(`${WC_KEY}:${WC_SECRET}`)

    // ✅ FIX: AbortController se timeout add karo
    // Agar WooCommerce slow hai toh user ko "expired" milta tha
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    let response
    try {
      response = await fetch(
        `${WC_URL}/wp-json/wc/v3/orders/${token}`,
        {
          headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        }
      )
    } finally {
      clearTimeout(timeoutId)
    }

    // ✅ FIX: Network error aur 404 alag treat karo
    if (response.status === 404) {
      return { valid: false, reason: 'invalid' }
    }

    if (!response.ok) {
      // Server error (500, 503 etc) — "invalid" mat dikhao, retry page dikhao
      return { valid: false, reason: 'error' }
    }

    const order = await response.json()

    // 1. Check order status — must be completed
    if (order.status !== 'completed') {
      return { valid: false, reason: 'invalid' }
    }

    // 2. Check test type matches
    const orderType = order.meta_data?.find(m => m.key === '_mentora_test_type')?.value
    if (orderType && orderType !== type) {
      return { valid: false, reason: 'invalid' }
    }

    // 3. Check expiry — 7 days from order completion
    const completedDate = new Date(order.date_completed || order.date_created)
    const expiryDate = new Date(completedDate.getTime() + 7 * 24 * 60 * 60 * 1000)
    if (new Date() > expiryDate) {
      return { valid: false, reason: 'expired' }
    }

    // 4. Check if already used
    const alreadyUsed = order.meta_data?.find(m => m.key === '_mentora_test_used')?.value
    if (alreadyUsed === 'yes') {
      return { valid: false, reason: 'used' }
    }

    return {
      valid: true,
      orderId: order.id,
      customerName: `${order.billing.first_name} ${order.billing.last_name}`,
      customerEmail: order.billing.email,
      testType: type,
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error('Token verify timeout')
      return { valid: false, reason: 'error' }
    }
    console.error('Token verify error:', err)
    // ✅ FIX: Network error pe "invalid" nahi, "error" return karo
    return { valid: false, reason: 'error' }
  }
}

export async function markTokenUsed(orderId) {
  try {
    const credentials = btoa(`${WC_KEY}:${WC_SECRET}`)
    await fetch(`${WC_URL}/wp-json/wc/v3/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        meta_data: [{ key: '_mentora_test_used', value: 'yes' }],
      }),
    })
  } catch (err) {
    console.error('Mark used error:', err)
  }
}
