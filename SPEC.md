# Support Center Spec

## MVP

- Help-center home page with customer-focused support categories.
- Searchable help articles with sensible keywords and no-result feedback.
- Registration and account self-service flow with clear recovery steps.
- Support request form capturing customer/shop owner, UID, booking ID, subject, description, and attachment.
- Responsive, accessible interface aligned with ticketbro's existing dark product style.

## Future Roadmap

- Authenticated account and booking context in support requests.
- Provider-configurable articles and guided troubleshooting flows.
- AI-assisted article suggestions with human-support handoff.
- Ticket status, conversation history, and email notifications.
- Multilingual content and analytics for unresolved searches.

## Architecture & Tools

- Frontend: React, TypeScript, Vite, React Router, and CSS. This PoC uses typed local mock data instead of an API.
- Backend: a Node.js and TypeScript API deployed as AWS Lambda functions behind API Gateway. PostgreSQL stores articles and support requests; S3 stores file attachments.
- Platform and tools: AWS Cognito for authentication, SES for support-email notifications, GitHub Actions for CI, and ESLint plus production build checks. Vitest would be added for automated unit tests.
