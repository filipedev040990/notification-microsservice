export interface SaveLogInterface {
  execute: (input: SaveLogInterface.Input) => Promise<void>
}

export namespace SaveLogInterface {
  export type Input = {
    input: string
    output: string
    statusCode: number
  }
}

export interface LogRepositoryInterface {
  save: (input: SaveLogInterface.Input & LogRepositoryInterface.Input) => Promise<void>
}

export namespace LogRepositoryInterface {
  export type Input = {
    id: string
    createdAt: Date
  }
}
