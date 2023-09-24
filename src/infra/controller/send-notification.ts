import { SendEmailInterface } from '@/application/interfaces/email-sender'
import { QueueInterface } from '@/application/interfaces/queue'
import { SaveLogInterface } from '@/application/interfaces/save-log'

export class SendNotification {
  constructor (
    private readonly emailSender: SendEmailInterface,
    private readonly saveLog: SaveLogInterface
  ) {

  }

  async execute (queue: QueueInterface, queueName: string): Promise<void> {
    await queue.start()
    await queue.consume(queueName, async (data: any) => {
      const message = JSON.parse(data.content.toString())

      try {
        await this.emailSender.sendEmail({
          senderEmail: message.senderEmail,
          receiverEmail: message.receiverEmail,
          subject: message.subject,
          body: message.body
        })

        await this.saveLog.execute({
          input: message,
          output: 'Send mail success',
          statusCode: 200
        })
      } catch (error: any) {
        await this.saveLog.execute({
          input: message,
          output: error.toString(),
          statusCode: 500
        })
      }
    })
  }
}
