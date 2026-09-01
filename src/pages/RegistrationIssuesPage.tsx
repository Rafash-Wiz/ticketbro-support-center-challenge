import { Link } from 'react-router-dom'
import { useState } from 'react'
import RegistrationIssueAnswer, { type RegistrationIssue } from '../components/RegistrationIssueAnswer'

function RegistrationIssuesPage() {
  const [selectedIssue, setSelectedIssue] = useState<RegistrationIssue | null>(null)

  return (
    <section className="registration-issues-page">
      <Link className="back-link" to="/">
        Back to Help Center
      </Link>
      <p className="eyebrow">Registration & account</p>
      <h1>How can we help?</h1>
      <p>Choose an issue to find the right next step.</p>

      {selectedIssue ? (
        <RegistrationIssueAnswer issue={selectedIssue} onBack={() => setSelectedIssue(null)} />
      ) : (
        <div className="registration-options">
          <button type="button" onClick={() => setSelectedIssue('sign-in')}>
            I cannot sign in
          </button>
          <button type="button" onClick={() => setSelectedIssue('email')}>
            Can I change my email?
          </button>
          <button type="button" onClick={() => setSelectedIssue('domain')}>
            Can I change my shop domain?
          </button>
        </div>
      )}
    </section>
  )
}

export default RegistrationIssuesPage
