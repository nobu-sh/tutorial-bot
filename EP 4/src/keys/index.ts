import { config } from "dotenv"
import { resolve } from "path"
import { Keys } from '../types'

//Doing this here instead of on src/index.ts and scripts/deploy.ts (and elsewhere) guarantees the keys are loaded when other files import them
//Since this command is the only reason those files had the 'config' and 'resolve' import, it cleans them up too
config({ path: resolve(__dirname, '..', '.env') })

const keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? 'nil',
  testGuild: process.env.TEST_GUILD ?? 'nil'
}

if (Object.values(keys).includes('nil'))
  throw new Error('Not all ENV variables are defined!')

export default keys
