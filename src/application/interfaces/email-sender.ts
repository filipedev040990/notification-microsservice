export interface SendEmailInterface {
  sendEmail: (input: SendEmailInterface.Input) => Promise<void>
}

export namespace SendEmailInterface {
  export type Input = {
    senderEmail: string
    receiverEmail: string
    subject: string
    body: string
  }
}
