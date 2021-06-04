import * as kit from './kit.js'
import * as kit3 from './seconds'
import * as app from './app.js'
import log from './log.js'

const capitalize = (str, lowerRest = false) =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1))

//  执行某个函数
const executeFn = (context, name1, name2 = '', ...params) =>
  context[name1 + name2].apply(context, params)

export default {
  capitalize,
  executeFn,
  ...kit,
  ...kit3,
  ...app
  // log
}
