import { Link } from 'react-router-dom'
import { registrationIssueContent } from '../data/registrationIssues'

function ArticlePage() {
  const article = registrationIssueContent['sign-in']

  return (
    <section className="article-page">
      <Link className="back-link" to="/">
        Back to Help Center
      </Link>
      <p className="eyebrow">Registration & account</p>
      <h1>{article.title}</h1>
      <p>{article.body}</p>

      <ol>
        {article.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

export default ArticlePage
