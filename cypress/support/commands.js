
import '@4tw/cypress-drag-drop'


Cypress.Commands.add('accessSite', () => { //add "access site" custom command
    cy.clock(setTimeout)//freeze the clock
    cy.visit(Cypress.env('url'))  //visit homepage
    cy.tick()//unfreeze the clock
})




Cypress.Commands.add('accessListSite', () => { 
    cy.get(`:nth-child(1) > .collapsible-header`).click().should(`be.visible`,`Lista de Usuários`) //click on menu to obtain `Lista de Usuários`
    cy.get(`.active > .collapsible-body > ul > :nth-child(2) > a`).click().should(`be.visible`,`Lista de Usuários!!`) //click on `Lista de Usuários` and load page
})



