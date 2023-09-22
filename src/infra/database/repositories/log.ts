import { LogRepositoryInterface, SaveLogInterface } from '@/application/interfaces/save-log'
import { prismaClient } from '../prisma-client'

export class LogRepository implements LogRepositoryInterface {
  async save (input: SaveLogInterface.Input & LogRepositoryInterface.Input): Promise<void> {
    await prismaClient.log.create({ data: input })
  }
}
