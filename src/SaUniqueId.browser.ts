import {
  SaUniqueIdInterfaceStatic,
  SaUniqueIdInterface
} from './SaUniqueId.interface'

/**
 * @class SaUniqueId (browser)
 * @description
 * Implements id() method that returns a unique id that is 13 chars long 
 */
export const SaUniqueId: SaUniqueIdInterfaceStatic = class implements SaUniqueIdInterface {
  public static id(): string {
    let ms: string = '' + new Date().getTime()
    if (ms.length < 13) {
      ms = ms.padEnd(13, '0')
    }

    let str: string = ''
    if (
      typeof window !== 'undefined' &&
      window.crypto &&
      window.crypto.getRandomValues
    ) {
      const array: Uint32Array = new Uint32Array(1)
      window.crypto.getRandomValues(array)
      str = array[0].toString()
    } else {
      // throw error
      throw Error('Browser does not support window.crypto.getRandomValues')
    }

    if (str.length < 10) {
      str = str.padStart(10, '0')
    }

    return `${ms}${str}`
  }
}
