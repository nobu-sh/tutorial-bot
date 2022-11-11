import {
  Command,
  CommandCategory,
  CommandCategoryExtra,
  CommandExec,
  CommandMeta,
} from '../types'

export function command(meta: CommandMeta, exec: CommandExec): Command {
  return {
    meta,
    exec,
  }
}

export function category(name: string, commands: Command[], extra: CommandCategoryExtra = {}): CommandCategory {
  return {
    name,
    commands,
    ...extra,
  }
}
