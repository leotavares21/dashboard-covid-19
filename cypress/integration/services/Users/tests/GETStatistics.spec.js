import * as GETStatistics from '../requests/GETStatistics.request'

describe('GET COVID statistics', () => {
  it('List all statistics', () => {
    GETStatistics.allStatistics().should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
    })
  })
})
