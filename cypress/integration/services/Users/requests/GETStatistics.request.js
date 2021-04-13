/// <reference types="cypress" />

function allStatistics() {
  return cy.request({
    method: 'GET',
    url: 'statistics',
    failOnStatusCode: false,
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    }
  })
}

export { allStatistics }
