/// <reference types="cypress" />
const faker = require('faker')


describe('Create User', () => {
    it( 'Accessing Form page',()=> {
        
        cy.visit(Cypress.env('url'))                                       //Access url
        cy.get(':nth-child(1) > .collapsible-header').click({force: true}) //Click in 'Formulários'
        cy.contains('Criar Usuários').click({force: true})                 //Click in 'Criar Usuários'
        
    })
    it(' Filling the form',()=> {    
        cy.clock() 
        cy.get('#user_name').type('Camila').should('have.value', 'Camila')                                         //Fill in 'Name'
        cy.get('#user_lastname').type('Santos').should('have.value', 'Santos')                                     //Fill in 'Lastname'
        cy.get('#user_email').type(`${faker.random.uuid()}-@hotmail.com`, {force: true}).should('be.visible')     //using faker                               //Fill in 'email'
        cy.get('#user_address').type('Rose Street, 631').should('have.value', 'Rose Street, 631')                 //Fill in 'address'
        cy.get('#user_university').type('São Paulo University').should('have.value', 'São Paulo University')      //Fill in 'university'
        cy.get('#user_profile').type('Quality Assurance Trainee').should('have.value', 'Quality Assurance Trainee')  //Fill in 'Occupation'
        cy.get('#user_gender').type('Female').should('have.value', 'Female')                                         //Fill in 'gender'
        cy.get('#user_age').type('34')                                                                             //Fill in 'age'
                                                                           
    })
})    

  
        

