export interface QueueInterface {
  start: () => Promise<void>
  consume: (queue: string, callback: any) => Promise<any>
  publish: (exchange: string, routingKey: string, message: string) => Promise<boolean>
  close: () => Promise<void>
}
