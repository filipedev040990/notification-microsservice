import { MissingParamError } from '@/shared/errors'
import { SendEmail } from '../interfaces/email-sender.interface'

export class EmailSender implements SendEmail {
  constructor (private readonly emailAdapter: SendEmail) {

  }

  async sendEmail (input: SendEmail.Input): Promise<void> {
    this.validate(input)
  }

  private validate (input: SendEmail.Input): MissingParamError | null {
    const requiredFields = ['senderName', 'senderEmail', 'receiverEmail', 'receiverEmail', 'subject', 'body']
    for (const field of requiredFields) {
      if (!input[field as keyof SendEmail.Input]) {
        throw new MissingParamError(field)
      }
    }
    return null
  }
}
