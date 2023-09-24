import { SaveLog } from '@/application/usecases/save-log'
import { UUIDGenerator } from '../adapters/uuid-generator'
import { LogRepository } from '../database/repositories/log'

export const saveLogFactory = (): SaveLog => {
  const uuidGenerator = new UUIDGenerator()
  const repository = new LogRepository()
  return new SaveLog(uuidGenerator, repository)
}
