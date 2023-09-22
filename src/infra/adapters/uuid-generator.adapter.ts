import { UUIDGenerateInterface } from '@/application/interfaces/uuid-generate.interface'
import { randomUUID } from 'crypto'

export class UUIDGenerator implements UUIDGenerateInterface {
  generate (): string {
    return randomUUID()
  }
}
