/// <reference types="Cypress" />

describe('contact form', () => {

    beforeEach(() => {
        cy.visit('/about') // http://localhost:5173/about
    })
    
    it('should submit to form', () => {
        cy.task('seedDatabase', 'filename.csv').then(returnValue => {
            //use filename
        })
        cy.getById('contact-input-message').type('My Message')
        cy.getById('contact-input-name').type('My Name')
        cy.getById('contact-btn-submit').as('submitBtn')
        cy.get('@submitBtn').then( (el) =>{
            expect(el.attr('disabled')).to.be.undefined
            expect(el.text()).to.equal('Send Message')
        })
        cy.screenshot()
        cy.getById('contact-input-email').type('test@test.com')
        cy.submitForm()
        cy.screenshot()
        cy.get('@submitBtn').contains('Sending')
        cy.get('@submitBtn').should('have.attr', 'disabled')
        
    })
  
  })