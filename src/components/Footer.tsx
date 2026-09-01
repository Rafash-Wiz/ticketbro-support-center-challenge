import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <p>Personal support when you need it.</p>

      <nav aria-label="Footer navigation">
        <Link to="/contact">Contact</Link>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </nav>
    </footer>
  )
}

export default Footer
