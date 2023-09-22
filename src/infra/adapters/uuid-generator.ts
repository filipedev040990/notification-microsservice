import { UUIDGenerateInterface } from '@/application/interfaces/uuid-generate'
import { randomUUID } from 'crypto'

export class UUIDGenerator implements UUIDGenerateInterface {
  generate (): string {
    return randomUUID()
  }
}
