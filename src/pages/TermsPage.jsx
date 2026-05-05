import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TESTS, TEST_LABELS } from '../data/testsData'
import './TermsPage.css'

export default function TermsPage() {
  const navigate = useNavigate()
  const [session, setSession] = useState(null)
  const [checked, setChecked] = useState({ c1: false, c2: false, c3: false })

  useEffect(() => {
    const data = sessionStorage.getItem('mentora_session')
    if (!data) {
      navigate('/invalid', { replace: true })
      return
    }
    setSession(JSON.parse(data))
  }, [])

  if (!session) return null

  const test = TESTS[session.testType]
  const allChecked = Object.values(checked).every(Boolean)

  const totalQ = test?.sections?.reduce((sum, s) => sum + s.questions.length, 0) || 0

  return (
    <div className="terms-page">
      <div className="terms-container">
        {/* Header */}
        <div className="terms-header">
          <div className="terms-logo">MB</div>
          <div>
            <h1>Mentora Bridge</h1>
            <span className="terms-badge">{TEST_LABELS[session.testType]}</span>
          </div>
        </div>

        {/* Welcome */}
        <div className="terms-welcome">
          <h2>Welcome, {session.customerName}!</h2>
          <p>You are about to start the <strong>{test?.title}</strong> for <strong>{test?.subtitle}</strong>.</p>
        </div>

        {/* Test Info */}
        <div className="terms-info-grid">
          <div className="info-card">
            <span className="info-icon">📝</span>
            <div>
              <strong>{totalQ} Questions</strong>
              <span>One at a time</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">⏱️</span>
            <div>
              <strong>20–30 Minutes</strong>
              <span>No strict time limit</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">🔒</span>
            <div>
              <strong>One-Time Access</strong>
              <span>Cannot be retaken</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="terms-instructions">
          <h3>Instructions</h3>
          <ul>
            <li>Read each question carefully before answering.</li>
            <li>For rating questions, choose a number from 1 to 5.</li>
            <li>For multiple choice questions, select the option that best describes you.</li>
            <li>There are no right or wrong answers — be honest for the best results.</li>
            <li>Do not refresh or close the page during the test.</li>
            <li>Once submitted, this link will be deactivated.</li>
          </ul>
        </div>

        {/* Consent checkboxes */}
        <div className="terms-consent">
          <h3>Before you begin</h3>
          {[
            { key: 'c1', label: 'I have read the instructions and understand how the test works.' },
            { key: 'c2', label: 'I understand this is a one-time test and cannot be retaken.' },
            { key: 'c3', label: 'I agree that my responses will be used for career guidance purposes.' },
          ].map(({ key, label }) => (
            <label key={key} className="consent-item">
              <input
                type="checkbox"
                checked={checked[key]}
                onChange={e => setChecked(prev => ({ ...prev, [key]: e.target.checked }))}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        {/* Start Button */}
        <button
          className={`start-btn ${allChecked ? 'active' : ''}`}
          disabled={!allChecked}
          onClick={() => navigate('/test')}
        >
          Start Test →
        </button>
      </div>
    </div>
  )
}
