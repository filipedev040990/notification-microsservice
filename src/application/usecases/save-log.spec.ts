import { LogRepositoryInterface, SaveLogInterface } from '../interfaces/save-log.interface'
import { SaveLog } from './save-log'
import { mock } from 'jest-mock-extended'
import MockDate from 'mockdate'

describe('SaveLog', () => {
  const fakeLogRepository = mock<LogRepositoryInterface>()
  let sut: SaveLog
  let input: SaveLogInterface.Input & LogRepositoryInterface.Input

  beforeAll(() => {
    sut = new SaveLog(fakeLogRepository)
    input = {
      id: 'anyUUID',
      input: 'anyInput',
      output: 'anyOutput',
      statusCode: 200,
      createdAt: new Date()
    }
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call Repository once and with correct values', async () => {
    await sut.execute(input)

    expect(fakeLogRepository.save).toHaveBeenCalledTimes(1)
    expect(fakeLogRepository.save).toHaveBeenCalledWith(input)
  })
})
