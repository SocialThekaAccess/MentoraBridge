import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verifyToken } from '../utils/verifyToken'
import './VerifyPage.css'

export default function VerifyPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const token = searchParams.get('token')
    const type = searchParams.get('type')

    if (!token || !type) {
      navigate('/invalid', { replace: true })
      return
    }

    // ✅ FIX 1: Agar session already hai aur same token hai, dobara verify mat karo
    const existingSession = sessionStorage.getItem('mentora_session')
    if (existingSession) {
      try {
        const sess = JSON.parse(existingSession)
        if (sess.token === token) {
          // Same user wapas aaya — directly terms pe bhejo
          navigate('/terms', { replace: true })
          return
        }
      } catch (_) {
        // Corrupt session — clear karke fresh verify
        sessionStorage.removeItem('mentora_session')
      }
    }

    async function verify() {
      const result = await verifyToken(token, type)

      if (result.valid) {
        sessionStorage.setItem('mentora_session', JSON.stringify({
          orderId: result.orderId,
          customerName: result.customerName,
          customerEmail: result.customerEmail,
          testType: result.testType,
          token, // ✅ FIX 2: Token bhi session mein save karo
        }))
        navigate('/terms', { replace: true })
      } else {
        navigate(`/${result.reason}`, { replace: true })
      }
    }

    verify()
  }, [])

  return (
    <div className="verify-screen">
      <div className="verify-card">
        <div className="verify-logo">
          <span>MB</span>
        </div>
        <div className="verify-spinner" />
        <h2>Verifying your access...</h2>
        <p>Please wait a moment</p>
      </div>
    </div>
  )
}
