export type SupportRequestPayload = {
  issueCategory: string
  userType: string
  uid: string
  ticketId: string
  subject: string
  description: string
  attachmentName?: string
}

export type SupportRequestResponse = {
  requestId: string
}

export async function submitSupportRequest(
  payload: SupportRequestPayload,
): Promise<SupportRequestResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800))

  console.info('Fake support request submitted:', payload)

  return {
    requestId: `SUP-${Date.now()}`,
  }
}
