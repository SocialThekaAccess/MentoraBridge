import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VerifyPage from './pages/VerifyPage'
import TermsPage from './pages/TermsPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import StatusPages from './pages/StatusPages'

export default function App() {
  return (
    <BrowserRouter basename="/portal">
      <Routes>
        <Route path="/" element={<Navigate to="/verify" replace />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/test" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/expired" element={<StatusPages type="expired" />} />
        <Route path="/used" element={<StatusPages type="used" />} />
        <Route path="/invalid" element={<StatusPages type="invalid" />} />
        {/* ✅ FIX: Network/timeout error route */}
        <Route path="/error" element={<StatusPages type="error" />} />
        <Route path="*" element={<StatusPages type="invalid" />} />
      </Routes>
    </BrowserRouter>
  )
}
