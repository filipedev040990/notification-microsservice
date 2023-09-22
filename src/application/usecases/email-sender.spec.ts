import { SendEmailInterface } from '../interfaces/email-sender'
import { EmailSender } from './email-sender'
import { mock } from 'jest-mock-extended'

describe('EmailSender', () => {
  const fakeEmailAdapter = mock<SendEmailInterface>()
  const sut: EmailSender = new EmailSender(fakeEmailAdapter)
  const input: any = {}

  beforeEach(() => {
    input.senderName = 'anySenderName'
    input.senderEmail = 'anySenderEmail'
    input.receiverName = 'anyReceiverName'
    input.receiverEmail = 'anyReceiverEmail'
    input.subject = 'anySubject'
    input.body = 'anyBody'
  })

  describe('validate', () => {
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
  describe('SendEmail', () => {
    test('should call EmailAdapter once and with correct values', async () => {
      await sut.sendEmail(input)

      expect(fakeEmailAdapter.sendEmail).toHaveBeenCalledTimes(1)
      expect(fakeEmailAdapter.sendEmail).toHaveBeenCalledWith(input)
    })
  })
})
