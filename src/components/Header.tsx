import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        ticketbro <span>|</span> Help Center
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <span className="sign-in-link sign-in-stub">Sign in - Coming soon</span>
      </nav>
    </header>
  )
}

export default Header
