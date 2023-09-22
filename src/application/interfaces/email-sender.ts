export interface SendEmailInterface {
  sendEmail: (input: SendEmailInterface.Input) => Promise<void>
}

export namespace SendEmailInterface {
  export type Input = {
    senderName: string
    senderEmail: string
    receiverName: string
    receiverEmail: string
    subject: string
    body: string
  }
}
