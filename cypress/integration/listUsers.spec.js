/// <reference types="Cypress" />

context(`Contact Us`,()=>{ 
    beforeEach(()=>{ //before each iteration time, visit url
        cy.visit(Cypress.env('url'))   
    })

    it(`List Users`,()=>{
        cy.accessListSite() //custom command to Access List Site, lock at /support/commands.js
    })

    it(`Verify Create New Users`,()=>{
        cy.accessListSite()
        cy.contains(`Novo Usuário`).click().should(`be.visible`,`Novo Usuário!!`) //click on and verify `Novo Usuário!!` be visible
    })

    it(`Verify Return Back`,()=>{
        cy.accessListSite()
        cy.contains(`Voltar`).click().url(`https://automacaocombatista.herokuapp.com/treinamento/home`) //click on and verify url
    })
})
