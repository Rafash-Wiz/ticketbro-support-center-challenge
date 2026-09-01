export type RegistrationIssue = 'sign-in' | 'email' | 'domain'

type RegistrationIssueAnswerProps = {
  issue: RegistrationIssue
  onBack: () => void
}

const issueContent: Record<RegistrationIssue, { title: string; body: string; steps: string[] }> = {
  'sign-in': {
    title: 'I cannot sign in',
    body: 'First, check that you are using the email address connected to your ticketbro account.',
    steps: [
      'Select "Forgot password" on the sign-in page.',
      'Check your inbox and spam folder for the reset email.',
      'If you still cannot access your account, contact our support team.',
    ],
  },
  email: {
    title: 'Can I change my email?',
    body: 'You can update the email address used for your ticketbro account from your account settings.',
    steps: [
      'Sign in to your ticketbro account.',
      'Open your account settings.',
      'Enter and confirm your new email address.',
    ],
  },
  domain: {
    title: 'Can I change my shop domain?',
    body: 'Your shop domain can be changed if the new address is available.',
    steps: [
      'Open your shop settings.',
      'Choose the domain section.',
      'Enter the new domain and save your changes.',
    ],
  },
}

function RegistrationIssueAnswer({ issue, onBack }: RegistrationIssueAnswerProps) {
  const content = issueContent[issue]

  return (
    <article className="issue-answer">
      <button className="back-button" type="button" onClick={onBack}>
        Back to account issues
      </button>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <ol>
        {content.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </article>
  )
}

export default RegistrationIssueAnswer
