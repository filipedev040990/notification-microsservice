import { EmailSender } from '@/application/usecases/email-sender'
import { NodemailerAdapter } from '../adapters/nodemailer'

export const emailSenderFactory = (): EmailSender => {
  const emailAdapter = new NodemailerAdapter()
  return new EmailSender(emailAdapter)
}
