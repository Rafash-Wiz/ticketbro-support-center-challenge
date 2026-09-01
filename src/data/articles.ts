export type HelpArticle = {
  id: number
  title: string
  category: string
  summary: string
  keywords: string[]
  path?: string
}

export const articles: HelpArticle[] = [
  {
    id: 1,
    title: 'I cannot sign in',
    category: 'Registration & account',
    summary: 'Reset your password and regain access to your ticketbro account.',
    keywords: ['sign in', 'login', 'password', 'reset', 'access', 'account'],
    path: '/articles/cannot-sign-in',
  },
  {
    id: 2,
    title: 'Where can I find my tickets?',
    category: 'Bookings, tickets & refunds',
    summary: 'Find your ticket email or access your booking details.',
    keywords: ['ticket', 'booking', 'email', 'pdf', 'confirmation'],
  },
  {
    id: 3,
    title: 'How do I request a refund?',
    category: 'Bookings, tickets & refunds',
    summary: 'Learn when a refund is possible and how to contact the provider.',
    keywords: ['refund', 'cancel', 'cancellation', 'money back'],
  },
  {
    id: 4,
    title: 'When will I receive my payout?',
    category: 'Selling, payments & payouts',
    summary: 'Understand payout timing and check your payment status.',
    keywords: ['payout', 'payment', 'money', 'disbursement', 'selling'],
  },
  {
    id: 5,
    title: 'How can I change my shop domain?',
    category: 'Registration & account',
    summary: 'Update the domain connected to your ticketbro shop.',
    keywords: ['shop', 'domain', 'change', 'website', 'account'],
  },
]
