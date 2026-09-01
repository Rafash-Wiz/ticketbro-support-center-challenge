import type { ReactNode } from 'react'

type SupportCategoryCardProps = {
  title: string
  icon: ReactNode
}

function SupportCategoryCard({ title, icon }: SupportCategoryCardProps) {
  return (
    <button className="support-card" type="button">
      <span className="card-icon">{icon}</span>
      <span>{title}</span>
    </button>
  )
}

export default SupportCategoryCard
