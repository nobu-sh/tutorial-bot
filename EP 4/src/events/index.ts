import { Event } from '../types'
import ready from './ready'
import interactionCreate from './interactionCreate'

const events: Event<any>[] = [
  ...interactionCreate,
  ready,
]

export default events
