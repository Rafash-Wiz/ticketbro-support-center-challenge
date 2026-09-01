import SupportCategoryCard from './SupportCategoryCard'

function IdIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M8 17c.8-2 2.1-3 4-3s3.2 1 4 3" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.1 10.2h10.5l2-7H6.4" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="17" cy="19" r="1" />
    </svg>
  )
}

function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M12 8v8M14.5 10.2c-.4-.7-1.2-1.2-2.5-1.2-1.5 0-2.5.7-2.5 1.8 0 2.5 5 1.2 5 3.8 0 1.1-1 1.8-2.5 1.8-1.3 0-2.2-.5-2.7-1.3" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="1.2" />
      <circle cx="12" cy="12" r="1.2" />
      <circle cx="18" cy="12" r="1.2" />
    </svg>
  )
}

function SupportCategories() {
  return (
    <section className="support-categories" aria-label="Support categories">
      <SupportCategoryCard title="Registration & account" icon={<IdIcon />} />
      <SupportCategoryCard title="Bookings, tickets & refunds" icon={<CartIcon />} />
      <SupportCategoryCard title="Selling, payments & payouts" icon={<MoneyIcon />} />
      <SupportCategoryCard title="Something else" icon={<MoreIcon />} />
    </section>
  )
}

export default SupportCategories
