


describe('Testando Site Automação com Batista', () => {

    it('Access site', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home') //visit site url
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/treinamento/home') //verify that url is correct
    })

    it('Access iframe page', () => {

        cy.get('.collapsible > li:nth-of-type(3) > .collapsible-header').click() //click on the "Mudança de Foco" option at the left menu
        cy.get("[href='/mudancadefoco/iframe']").click() //click on the Alert option inside "Mudança de Foco" selection
    
    })

    it('Filling iframe form', () => {

        cy.get('#first_name').type("José Silva")
        
    })

    

})