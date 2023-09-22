import { LogRepositoryInterface, SaveLogInterface } from '../interfaces/save-log'
import { UUIDGenerateInterface } from '../interfaces/uuid-generate'

export class SaveLog implements SaveLogInterface {
  constructor (
    private readonly uuidGenerator: UUIDGenerateInterface,
    private readonly repository: LogRepositoryInterface
  ) {

  }

  async execute (props: SaveLogInterface.Input): Promise<void> {
    await this.repository.save({
      id: this.uuidGenerator.generate(),
      input: props.input,
      output: props.output,
      statusCode: props.statusCode,
      createdAt: new Date()
    })
  }
}
