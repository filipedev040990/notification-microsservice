import { MissingParamError } from '@/shared/errors'
import { SendEmailInterface } from '../interfaces/email-sender.interface'

export class EmailSender implements SendEmailInterface {
  constructor (private readonly emailAdapter: SendEmailInterface) {

  }

  async sendEmail (input: SendEmailInterface.Input): Promise<void> {
    this.validate(input)
    await this.emailAdapter.sendEmail(input)
  }

  private validate (input: SendEmailInterface.Input): MissingParamError | null {
    const requiredFields = ['senderName', 'senderEmail', 'receiverEmail', 'receiverEmail', 'subject', 'body']
    for (const field of requiredFields) {
      if (!input[field as keyof SendEmailInterface.Input]) {
        throw new MissingParamError(field)
      }
    }
    return null
  }
}
