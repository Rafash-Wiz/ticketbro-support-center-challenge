import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitSupportRequest } from '../api/supportRequests'

function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [requestId, setRequestId] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const attachment = formData.get('attachment')

    setIsSubmitting(true)
    setRequestId(null)
    setSubmitError(null)

    try {
      const response = await submitSupportRequest({
        issueCategory: String(formData.get('issue-category')),
        userType: String(formData.get('user-type')),
        uid: String(formData.get('uid')),
        ticketId: String(formData.get('ticket-id')),
        subject: String(formData.get('subject')),
        description: String(formData.get('description')),
        attachmentName: attachment instanceof File && attachment.size > 0 ? attachment.name : undefined,
      })

      form.reset()
      setRequestId(response.requestId)
    } catch {
      setSubmitError('We could not submit your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
        <label htmlFor="issue-category">
          What do you need help with? <span className="required-marker" aria-hidden="true">*</span>
        </label>
        <select id="issue-category" name="issue-category" defaultValue="" required>
          <option value="" disabled>
            Choose an issue
          </option>
          <option value="account">Registration & account</option>
          <option value="booking">Bookings, tickets & refunds</option>
          <option value="payments">Selling, payments & payouts</option>
          <option value="other">Something else</option>
        </select>

        <label htmlFor="user-type">
          I am a <span className="required-marker" aria-hidden="true">*</span>
        </label>
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

        <label htmlFor="subject">
          Subject <span className="required-marker" aria-hidden="true">*</span>
        </label>
        <input id="subject" name="subject" type="text" placeholder="Briefly describe the issue" required />

        <label htmlFor="description">
          Description <span className="required-marker" aria-hidden="true">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          placeholder="Tell us what happened and what you have already tried."
          required
        />

        <label htmlFor="attachment">Attach a file (screenshots, PDFs, etc.)</label>
        <input id="attachment" name="attachment" type="file" accept="image/*,.pdf" />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting request...' : 'Submit request'}
        </button>

        {requestId && (
          <p className="request-success" role="status">
            Your request has been submitted with ID {requestId}. Our support team will get back to you soon.
          </p>
        )}

        {submitError && <p className="request-error" role="alert">{submitError}</p>}
      </form>
    </section>
  )
}

export default ContactUsPage
