export interface SendEmail {
  sendEmail: (input: SendEmail.Input) => Promise<void>
}

export namespace SendEmail {
  export type Input = {
    senderName: string
    senderEmail: string
    receiverName: string
    receiverEmail: string
    subject: string
    body: string
  }
}
