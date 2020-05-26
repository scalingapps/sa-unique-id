import { expect } from 'chai'
import { SaUniqueId } from '@/SaUniqueId'

describe('SaUniqueId', () => {
	describe('id', () => {
		it('should return id as a string with length 23', () => {
			const saUniqueId: SaUniqueId = new SaUniqueId()
			const result = saUniqueId.id()
			expect(result.toString().length).to.equal(23)
			expect(result).to.be.a('string')
		})

		it('should return id as a string with length 23 many times', (done) => {
			const saUniqueId: SaUniqueId = new SaUniqueId()
			const results: string[] = []
			const howMany: number = 1000
			for (let i = 0; i < howMany; i++ ) {
				results.push(saUniqueId.id())
			}
			expect(results.length).to.equal(howMany)
			results.forEach((result: string) => {
				expect(result.toString().length).to.equal(23)
				expect(result).to.be.a('string')
			})
			done()
		})
	})
})
