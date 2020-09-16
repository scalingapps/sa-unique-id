import { expect } from 'chai'
import { SaUniqueId } from '../../src/SaUniqueId.node'

import { UnderLog, StdErrTransport } from 'underlog'
const stdErrTransport = new StdErrTransport({
  level: 'error',
  levelOnly: false,
})
const logger: UnderLog = new UnderLog({
  transports: [stdErrTransport],
})

describe('SaUniqueId', () => {
  describe('id', () => {
    it('should return id as a string with length 23', () => {
      const result = SaUniqueId.id()
      expect(result.toString().length).to.equal(23)
      expect(result).to.be.a('string')
    })

    it('should return id as a string with length 23 many times', (done) => {
      const results: string[] = []
      const howMany: number = 1000
      for (let i = 0; i < howMany; i++) {
        results.push(SaUniqueId.id())
      }
      expect(results.length).to.equal(howMany)
      results.forEach((result: string) => {
        logger.info(`result ${result}`)
        expect(result.toString().length).to.equal(23)
        expect(result).to.be.a('string')
      })
      done()
    })
  })
})
