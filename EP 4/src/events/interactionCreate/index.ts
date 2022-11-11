import { Event } from '../../types'
import commands from './commands'
import help from './help'

const events: Event<any>[] = [
  commands,
  help,
]

export default events
