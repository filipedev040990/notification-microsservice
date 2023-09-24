import { SendEmailInterface } from '@/application/interfaces/email-sender'
import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer'

export class NodemailerAdapter implements SendEmailInterface {
  private readonly transporter: Mail

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_PROVIDER_HOST,
      port: Number(process.env.EMAIL_PROVIDER_PORT)!,
      auth: {
        user: process.env.EMAIL_PROVIDER_USER,
        pass: process.env.EMAIL_PROVIDER_PASS
      }
    })
  }

  async sendEmail (input: SendEmailInterface.Input): Promise <void> {
    const options = {
      from: input.senderEmail,
      to: input.receiverEmail,
      subject: input.subject,
      html: input.body
    }

    await this.transporter.sendMail(options)
  }
}
