
describe('modal interaction', () => { //describe function
    it('successfully opens modal', () => { //callback function
        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/modal') //visiting page

        cy.get('.waves-light').click() //clicks in modal button

        cy.get('.modal-content').should('be.visible') //verify modal content is visible
    })
})