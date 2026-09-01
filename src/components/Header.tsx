import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        ticketbro <span>|</span> Help Center
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <a className="sign-in-link" href="#sign-in">
          Sign in
        </a>
      </nav>
    </header>
  )
}

export default Header
