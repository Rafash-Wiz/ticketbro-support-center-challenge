import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <p>Personal support when you need it.</p>

      <nav aria-label="Footer navigation">
        <Link to="/contact">Contact</Link>
        <span>Privacy - Coming soon</span>
        <span>Terms - Coming soon</span>
      </nav>
    </footer>
  )
}

export default Footer
