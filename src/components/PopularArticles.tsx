import { articles } from '../data/articles'
import { Link } from 'react-router-dom'

function PopularArticles() {
  return (
    <section className="popular-articles" aria-labelledby="popular-articles-heading">
      <div className="section-heading">
        <p className="eyebrow">Quick answers</p>
        <h2 id="popular-articles-heading">Popular help articles</h2>
      </div>

      <div className="article-list">
        {articles.slice(0, 4).map((article) =>
          article.id === 1 ? (
            <Link to="/articles/cannot-sign-in" key={article.id}>
              <span>
                <strong>{article.title}</strong>
              </span>
              <small className="available-article-label">Read article</small>
            </Link>
          ) : (
            <article className="article-card" key={article.id}>
              <strong>{article.title}</strong>
              <small className="coming-soon-label">Coming soon</small>
            </article>
          ),
        )}
      </div>
    </section>
  )
}

export default PopularArticles
