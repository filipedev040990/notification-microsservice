import { LogRepositoryInterface, SaveLogInterface } from '../interfaces/save-log.interface'

export class SaveLog implements SaveLogInterface {
  constructor (private readonly repository: LogRepositoryInterface) {

  }

  async execute (props: SaveLogInterface.Input): Promise<void> {
    await this.repository.save({
      id: 'anyUUID',
      input: props.input,
      output: props.output,
      statusCode: props.statusCode,
      createdAt: new Date()
    })
  }
}
