import { SendEmail } from '../interfaces/email-sender.interface'
import { EmailSender } from './email-sender'
import { mock } from 'jest-mock-extended'

const fakeEmailAdapter = mock<SendEmail>()

describe('EmailSender', () => {
  let sut: EmailSender
  let input: SendEmail.Input

  beforeEach(() => {
    sut = new EmailSender(fakeEmailAdapter)

    input = {
      senderName: 'anySenderName',
      senderEmail: 'anySenderEmail',
      receiverName: 'anyReceiverName',
      receiverEmail: 'anyReceiverEmail',
      subject: 'anySubject',
      body: 'anyBody'
    }
  })

  test('should call sut.validate once and with correct values', async () => {
    const spy = jest.spyOn(sut as any, 'validate')

    await sut.sendEmail(input)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(input)
  })
})
