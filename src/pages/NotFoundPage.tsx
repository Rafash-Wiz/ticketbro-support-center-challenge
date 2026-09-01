import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>We could not find that page.</h1>
      <p>The link may be outdated, or the page may not be available yet.</p>
      <Link to="/">Back to Help Center</Link>
    </section>
  )
}

export default NotFoundPage
