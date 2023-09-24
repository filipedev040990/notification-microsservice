import 'module-alias/register'
import { app } from './app'
import { sendNotificationFactory } from './factories/send-notification'
import { RabbitmqAdapter } from './adapters/rabbitmq'

const start = async (): Promise<void> => {
  const port = process.env.PORT ?? 3000
  app.listen(port, () => console.log(`Server running at port ${port}`))

  const sendNotification = sendNotificationFactory()

  const queue = new RabbitmqAdapter(process.env.RABBITMQ_URI as string)

  await sendNotification.execute(queue, process.env.QUEUE_NOTIFICATION as string)
}

void start()
