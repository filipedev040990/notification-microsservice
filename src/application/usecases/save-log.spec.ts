import { LogRepositoryInterface, SaveLogInterface } from '../interfaces/save-log'
import { UUIDGenerateInterface } from '../interfaces/uuid-generate'
import { SaveLog } from './save-log'
import { mock } from 'jest-mock-extended'
import MockDate from 'mockdate'

describe('SaveLog', () => {
  const fakeLogRepository = mock<LogRepositoryInterface>()
  const fakeUUIDGenerator = mock<UUIDGenerateInterface>()
  let sut: SaveLog
  let input: SaveLogInterface.Input & LogRepositoryInterface.Input

  beforeAll(() => {
    sut = new SaveLog(fakeUUIDGenerator, fakeLogRepository)
    input = {
      id: 'anyUUID',
      input: 'anyInput',
      output: 'anyOutput',
      statusCode: 200,
      createdAt: new Date()
    }
    MockDate.set(new Date())
    fakeUUIDGenerator.generate.mockReturnValue('anyUUID')
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call Repository once and with correct values', async () => {
    await sut.execute(input)

    expect(fakeLogRepository.save).toHaveBeenCalledTimes(1)
    expect(fakeLogRepository.save).toHaveBeenCalledWith(input)
  })

  test('should call UUIDGenerator once and with correct values', async () => {
    await sut.execute(input)

    expect(fakeUUIDGenerator.generate).toHaveBeenCalledTimes(1)
  })
})
