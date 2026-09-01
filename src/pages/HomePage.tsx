import PopularArticles from '../components/PopularArticles'
import SupportCategories from '../components/SupportCategories'

function HomePage() {
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
          <input type="search" aria-label="Search the help center" placeholder="Search for help" />
          <button type="button">Search</button>
        </div>
      </section>

      <SupportCategories />
      <PopularArticles />
    </>
  )
}

export default HomePage
