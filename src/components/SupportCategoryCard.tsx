import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type SupportCategoryCardProps = {
  title: string
  icon: ReactNode
  to?: string
}

function SupportCategoryCard({ title, icon, to }: SupportCategoryCardProps) {
  if (to) {
    return (
      <Link className="support-card" to={to}>
        <span className="card-icon">{icon}</span>
        <span>{title}</span>
      </Link>
    )
  }

  return (
    <div className="support-card support-card-stub" aria-label={`${title}: coming soon`}>
      <span className="card-icon">{icon}</span>
      <span>{title}</span>
      <small className="coming-soon-label">Coming soon</small>
    </div>
  )
}

export default SupportCategoryCard
