describe('mouse hover interaction', () => { //describe function
    it('successfully perform mouse hover interaction', () => { //callback function
        cy.visit('https://automacaocombatista.herokuapp.com/iteracoes/mousehover') //visiting page
        
        cy.get('.activator').click() //forces a mousehover interaction usin a click

        cy.get('.card-title > div').should('be.visible') //verify card after mouse hover action
    })
})