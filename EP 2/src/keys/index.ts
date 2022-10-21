import { Keys } from '../types'

const keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? 'nil'
}

if (Object.values(keys).includes('nil'))
  throw new Error('Not all ENV variables are defined!')

export default keys
