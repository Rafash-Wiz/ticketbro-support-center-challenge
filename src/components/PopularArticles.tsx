const popularArticles = [
  'I did not receive my ticket',
  'How do I change or cancel a booking?',
  'How do I request a refund?',
  'How do I update my account details?',
]

function PopularArticles() {
  return (
    <section className="popular-articles" aria-labelledby="popular-articles-heading">
      <div className="section-heading">
        <p className="eyebrow">Quick answers</p>
        <h2 id="popular-articles-heading">Popular help articles</h2>
      </div>

      <div className="article-list">
        {popularArticles.map((article) => (
          <a href="#article" key={article}>
            {article}
          </a>
        ))}
      </div>
    </section>
  )
}

export default PopularArticles
