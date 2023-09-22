import { SendEmail } from '../interfaces/email-sender.interface'
import { EmailSender } from './email-sender'
import { mock } from 'jest-mock-extended'

const fakeEmailAdapter = mock<SendEmail>()

describe('EmailSender', () => {
  let sut: EmailSender
  let input: any

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

  test('should throws if any required field is falsy', async () => {
    const requiredFields = ['senderName', 'senderEmail', 'receiverEmail', 'receiverEmail', 'subject', 'body']

    for (const field of requiredFields) {
      input[field] = null

      const promise = sut.sendEmail(input)

      await expect(promise).rejects.toThrowError(`Missing param: ${field}`)

      input[field] = field
    }
  })
})
