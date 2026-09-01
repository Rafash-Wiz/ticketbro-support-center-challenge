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
    <button className="support-card" type="button">
      <span className="card-icon">{icon}</span>
      <span>{title}</span>
    </button>
  )
}

export default SupportCategoryCard
