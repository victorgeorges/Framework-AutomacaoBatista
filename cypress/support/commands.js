Cypress.Commands.add('accessListSite', () => { 
    cy.get(`:nth-child(1) > .collapsible-header`).click().should(`be.visible`,`Lista de Usuários`) //click on menu to obtain `Lista de Usuários`
    cy.get(`.active > .collapsible-body > ul > :nth-child(2) > a`).click().should(`be.visible`,`Lista de Usuários!!`) //click on `Lista de Usuários` and load page
})
