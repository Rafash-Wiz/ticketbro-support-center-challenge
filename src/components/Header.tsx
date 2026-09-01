function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        ticketbro <span>|</span> Help Center
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a className="sign-in-link" href="#sign-in">
          Sign in
        </a>
      </nav>
    </header>
  )
}

export default Header
