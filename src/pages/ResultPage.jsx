import React from 'react'
import { useLocation } from 'react-router-dom'
import './ResultPage.css'

export default function ResultPage() {
  const { state } = useLocation()
  const name = state?.customerName || 'Student'
  const success = state?.success !== false

  return (
    <div className="result-page">
      <div className="result-card">
        <div className="result-icon">{success ? '✅' : '⚠️'}</div>
        <h1>{success ? 'Test Submitted!' : 'Submission Issue'}</h1>
        <p className="result-name">Well done, <strong>{name}</strong>!</p>
        {success ? (
          <>
            <p className="result-msg">
              Your responses have been recorded. Our career counselors at Mentora Bridge will review your answers and prepare your personalized career guidance report.
            </p>
            <div className="result-next">
              <h3>What happens next?</h3>
              <ul>
                <li>📧 You will receive a confirmation email shortly.</li>
                <li>📊 Our team will analyze your responses.</li>
                <li>📞 A counselor will reach out to you within 3–5 business days.</li>
              </ul>
            </div>
          </>
        ) : (
          <p className="result-msg">
            There was an issue saving your responses. Please contact us at <strong>support@mentorabridge.com</strong> with your order ID and we will help you right away.
          </p>
        )}
        <div className="result-footer">
          <span>© Mentora Bridge</span>
        </div>
      </div>
    </div>
  )
}
