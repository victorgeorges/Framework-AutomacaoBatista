Cypress.Commands.add('accessSite', () => { //add "access site" custom command
    cy.clock(setTimeout)//freeze the clock
    cy.visit(Cypress.env('url'))  //visit homepage
    cy.tick()//unfreeze the clock
})

