import { Link } from 'react-router-dom'
import { useState } from 'react'

function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    setIsSubmitted(true)
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <Link className="back-link" to="/">
          Back to Help Center
        </Link>
        <p className="eyebrow">Support request</p>
        <h1>Submit a request</h1>
        <p>Share a few details and our support team will help you as quickly as possible.</p>
      </div>

      <form className="request-form" onSubmit={handleSubmit}>
        <label htmlFor="issue-category">What do you need help with?</label>
        <select id="issue-category" name="issue-category" defaultValue="" required>
          <option value="" disabled>
            Choose an issue
          </option>
          <option value="account">Registration & account</option>
          <option value="booking">Bookings, tickets & refunds</option>
          <option value="payments">Selling, payments & payouts</option>
          <option value="other">Something else</option>
        </select>

        <label htmlFor="user-type">I am a</label>
        <select id="user-type" name="user-type" defaultValue="" required>
          <option value="" disabled>
            Choose one
          </option>
          <option value="customer">Customer</option>
          <option value="shop-owner">Shop owner</option>
        </select>

        <label htmlFor="uid">ticketbro UID</label>
        <input id="uid" name="uid" type="text" placeholder="Your unique user ID" />

        <label htmlFor="ticket-id">Ticket or booking ID</label>
        <input id="ticket-id" name="ticket-id" type="text" placeholder="Optional" />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="Briefly describe the issue" required />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={6}
          placeholder="Tell us what happened and what you have already tried."
          required
        />

        <label htmlFor="attachment">Attach a file</label>
        <input id="attachment" name="attachment" type="file" />

        <button type="submit">Submit request</button>

        {isSubmitted && (
          <p className="request-success" role="status">
            Your request has been submitted. Our support team will get back to you soon.
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactUsPage
