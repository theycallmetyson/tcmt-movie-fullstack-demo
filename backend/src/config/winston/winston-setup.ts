import { Logger } from 'winston'
import buildDevLogger from './dev-logger.js'
import buildProdLogger from './prod-logger.js'

let logger: Logger

process.env.NODE_ENV === 'dev'
  ? (logger = buildDevLogger())
  : (logger = buildProdLogger())

export default logger
