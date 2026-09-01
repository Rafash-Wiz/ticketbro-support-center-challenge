import { useState } from 'react'
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

  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">ticketbro support</p>
        <h1>We're here when things don't go as planned.</h1>

        <div className="search-bar">
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
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setSubmittedSearchTerm(searchTerm)
              }
            }}
          />
          <button type="button" onClick={() => setSubmittedSearchTerm(searchTerm)}>
            Search
          </button>
        </div>
      </section>

      {normalizedSearchTerm && (
        <section className="search-results" aria-live="polite">
          <div className="section-heading">
            <p className="eyebrow">Search results</p>
            <h2>{matchingArticles.length} matching articles</h2>
          </div>

          {matchingArticles.length > 0 ? (
            <div className="article-list">
              {matchingArticles.map((article) => (
                <a href="#article" key={article.id}>
                  <span>
                    <strong>{article.title}</strong>
                    <small>{article.summary}</small>
                  </span>
                  <small>{article.category}</small>
                </a>
              ))}
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
