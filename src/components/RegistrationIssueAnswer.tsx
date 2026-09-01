import { registrationIssueContent, type RegistrationIssue } from '../data/registrationIssues'

type RegistrationIssueAnswerProps = {
  issue: RegistrationIssue
  onBack: () => void
}

function RegistrationIssueAnswer({ issue, onBack }: RegistrationIssueAnswerProps) {
  const content = registrationIssueContent[issue]

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
