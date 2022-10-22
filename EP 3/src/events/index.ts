import { Event } from '../types'
import ready from './ready'
import interactionCreate from './interactionCreate'

const events: Event<any>[] = [
  ready,
  interactionCreate,
]

export default events
