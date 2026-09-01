import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import PopularArticles from '../components/PopularArticles'
import SupportCategories from '../components/SupportCategories'
import { articles } from '../data/articles'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('')
  const normalizedSearchTerm = submittedSearchTerm.trim().toLowerCase()

  const matchingArticles = articles.filter((article) => {
    const searchableText = [
      article.title,
      article.category,
      article.summary,
      ...article.keywords,
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedSearchTerm)
  })

  const articleLabel = matchingArticles.length === 1 ? 'article' : 'articles'

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedSearchTerm(searchTerm)
  }

  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">ticketbro support</p>
        <h1>We're here when things don't go as planned.</h1>

        <form className="search-bar" onSubmit={handleSearch}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="m16 16 4 4" />
          </svg>
          <input
            type="search"
            aria-label="Search the help center"
            placeholder="Search for help"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {normalizedSearchTerm && (
        <section className="search-results" aria-live="polite">
          <div className="section-heading">
            <p className="eyebrow">Search results</p>
            <h2>
              {matchingArticles.length} matching {articleLabel}
            </h2>
          </div>

          {matchingArticles.length > 0 ? (
            <div className="article-list">
              {matchingArticles.map((article) =>
                article.path ? (
                  <Link to={article.path} key={article.id}>
                    <span>
                      <strong>{article.title}</strong>
                      <small>{article.summary}</small>
                    </span>
                    <span>
                      <small>{article.category}</small>
                      <small className="available-article-label">Read article</small>
                    </span>
                  </Link>
                ) : (
                  <article className="article-card" key={article.id}>
                    <span>
                      <strong>{article.title}</strong>
                      <small>{article.summary}</small>
                    </span>
                    <span>
                      <small>{article.category}</small>
                      <small className="coming-soon-label">Coming soon</small>
                    </span>
                  </article>
                ),
              )}
            </div>
          ) : (
            <p className="empty-search-result">
              No articles matched "{submittedSearchTerm}". Try a different search term.
            </p>
          )}
        </section>
      )}

      <SupportCategories />
      <PopularArticles />
    </>
  )
}

export default HomePage
