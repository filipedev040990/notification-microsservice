import { SendNotification } from '../controller/send-notification'
import { emailSenderFactory } from './email-sender'
import { saveLogFactory } from './save-log'

export const sendNotificationFactory = (): SendNotification => {
  const emailSender = emailSenderFactory()
  const saveLog = saveLogFactory()
  return new SendNotification(emailSender, saveLog)
}
