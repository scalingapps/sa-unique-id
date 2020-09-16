import {
  SaUniqueIdInterfaceStatic,
  SaUniqueIdInterface
} from './SaUniqueId.interface'

/**
 * @class SaUniqueId (node)
 * @description
 * Implements id() method that returns a unique id that is 13 chars long 
 */
export const SaUniqueId: SaUniqueIdInterfaceStatic = class implements SaUniqueIdInterface {
  public static id(): string {
    let ms: string = '' + new Date().getTime()
    if (ms.length < 13) {
      ms = ms.padEnd(13, '0')
    }

    // node
    let str: string = require('crypto').randomBytes(5).toString('hex')

    if (str.length < 10) {
      str = str.padStart(10, '0')
    }

    return `${ms}${str}`
  }
}
