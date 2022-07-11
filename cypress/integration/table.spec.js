/// <reference types="Cypress" />

context(`Upload File`,()=>{ 
    beforeEach(()=>{ //before each iteration time, visit url
        cy.accessSite()       // "access site" custom command
    })

    it(`List Users`,()=>{
        cy.get(`:nth-child(2) > .collapsible-header`).click({force: true}).should(`be.visible`, `Tabela`) //click on "Tabela" and verify
        cy.get(`:nth-child(7) > a`).click({force: true}).url(`https://automacaocombatista.herokuapp.com/buscaelementos/table`)//click on and verify url
    })
    it(`Verify Itens`,()=>{
        cy.get(`:nth-child(2) > .collapsible-header`).click({force: true}).should(`be.visible`, `Tabela`) //click on "Tabela" and verify
        cy.get(`:nth-child(7) > a`).click({force: true}).url(`https://automacaocombatista.herokuapp.com/buscaelementos/table`)//click on and verify url
       
        cy.contains(`tbody > :nth-child(2) > :nth-child(1)`, `Feijão`).should(`be.visible`) //verify itens
        cy.contains(`tbody > :nth-child(5) > :nth-child(1)`, `Leite`).should(`be.visible`) //verify itens
        cy.contains(`tbody > :nth-child(7) > :nth-child(1)`, `Carne`).should(`be.visible`) //verify itens
    })
})