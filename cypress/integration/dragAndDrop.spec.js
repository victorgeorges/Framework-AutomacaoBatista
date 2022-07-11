describe('drag and drop interaction', () => { //describe function
    it('successfully perform drag and drop', () => { //callback function
        cy.visit('https://automacaocombatista.herokuapp.com/iteracoes/draganddrop') //visiting page
        
        cy.get('#winston').drag('#dropzone', {force: true}).then((success) => { // perform drag and drop interaction and verify if it wass successful
            assert.isTrue(success)
          })
    })
})
