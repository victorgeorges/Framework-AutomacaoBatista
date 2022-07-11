/// <reference types="Cypress" />

describe('E-commerce page test automation ', () => {    //describe scenario and callback function
    it('Visiting HomePage', () => {
      cy.accessSite()                                       // "access site" custom command
      cy.title().should('be.equal', 'Automação com Batista')  //verify Title
    })
  })
  