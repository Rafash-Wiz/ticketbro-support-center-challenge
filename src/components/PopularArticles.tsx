import { articles } from '../data/articles'

function PopularArticles() {
  return (
    <section className="popular-articles" aria-labelledby="popular-articles-heading">
      <div className="section-heading">
        <p className="eyebrow">Quick answers</p>
        <h2 id="popular-articles-heading">Popular help articles</h2>
      </div>

      <div className="article-list">
        {articles.slice(0, 4).map((article) => (
          <a href="#article" key={article.id}>
            {article.title}
          </a>
        ))}
      </div>
    </section>
  )
}

export default PopularArticles
