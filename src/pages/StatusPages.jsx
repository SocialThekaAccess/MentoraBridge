import React from 'react'
import './StatusPages.css'

const CONTENT = {
  expired: {
    icon: '⏰',
    title: 'Link Expired',
    message: 'This test link was valid for 7 days and has now expired.',
    help: 'If you believe this is an error, please contact us at support@mentorabridge.com with your order details.',
    color: '#e67e22',
  },
  used: {
    icon: '🔒',
    title: 'Already Used',
    message: 'This test has already been completed. Each link can only be used once.',
    help: 'If you did not complete the test, please contact us at support@mentorabridge.com.',
    color: '#8e44ad',
  },
  invalid: {
    icon: '❌',
    title: 'Invalid Link',
    message: 'This link is not valid or may have been entered incorrectly.',
    help: 'Please check the link in your email or contact us at support@mentorabridge.com.',
    color: '#c0392b',
  },
  // ✅ FIX: Network/timeout error ke liye alag page — retry button ke saath
  error: {
    icon: '🌐',
    title: 'Connection Error',
    message: 'We could not verify your link due to a network issue. Please try again.',
    help: 'If the problem persists, contact us at support@mentorabridge.com.',
    color: '#2980b9',
    retry: true,
  },
}

export default function StatusPages({ type }) {
  const content = CONTENT[type] || CONTENT.invalid

  return (
    <div className="status-page">
      <div className="status-card">
        <div className="status-icon" style={{ background: content.color + '18' }}>
          {content.icon}
        </div>
        <h1>{content.title}</h1>
        <p className="status-msg">{content.message}</p>
        <div className="status-help">
          <p>{content.help}</p>
        </div>
        {/* ✅ Retry button — user wapas same link pe jaaye */}
        {content.retry && (
          <button
            onClick={() => window.history.back()}
            style={{
              marginTop: '1rem',
              padding: '0.6rem 1.6rem',
              background: content.color,
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            🔄 Try Again
          </button>
        )}
        <div className="status-brand">
          <span className="status-logo">MB</span>
          <span>Mentora Bridge</span>
        </div>
      </div>
    </div>
  )
}
