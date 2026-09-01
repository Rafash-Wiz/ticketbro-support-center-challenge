import { Link } from 'react-router-dom'

function RegistrationIssuesPage() {
  return (
    <section className="registration-issues-page">
      <Link className="back-link" to="/">
        Back to Help Center
      </Link>
      <p className="eyebrow">Registration & account</p>
      <h1>Account help</h1>
      <p>Choose an issue to find the right next step.</p>
    </section>
  )
}

export default RegistrationIssuesPage
