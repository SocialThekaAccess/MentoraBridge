// =============================================
// Submit test responses
// Saves to WooCommerce order + sends email
// =============================================
const WC_URL = 'https://mentorabridge.com'
const WC_KEY = 'ck_XXXXXXXXXXXXXXXXXXXX'
const WC_SECRET = 'cs_XXXXXXXXXXXXXXXXXXXX'

// Admin email jahan results jaayenge
const ADMIN_EMAIL = 'admin@mentorabridge.com'   // ← apna email

export async function submitResponses({ orderId, customerName, customerEmail, testType, answers, questions }) {
  const credentials = btoa(`${WC_KEY}:${WC_SECRET}`)

  // Answers ko readable format mein convert karo
  const answersText = questions.map((q, i) => {
    const ans = answers[i]
    let answerLabel = ans
    if (q.options) {
      answerLabel = q.options[ans] || ans
    }
    return `Q${i + 1}. ${q.text}\nAnswer: ${answerLabel}`
  }).join('\n\n')

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

  try {
    // 1. WooCommerce order mein save karo
    await fetch(`${WC_URL}/wp-json/wc/v3/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        meta_data: [
          { key: '_mentora_test_used', value: 'yes' },
          { key: '_mentora_test_answers', value: answersText },
          { key: '_mentora_test_submitted_at', value: submittedAt },
        ],
      }),
    })

    // 2. Email bhejo WordPress hook se
    await fetch(`${WC_URL}/wp-json/mentora/v1/send-results`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId,
        customerName,
        customerEmail,
        adminEmail: ADMIN_EMAIL,
        testType,
        answers: answersText,
        submittedAt,
      }),
    })

    return { success: true }
  } catch (err) {
    console.error('Submit error:', err)
    return { success: false, error: err.message }
  }
}
