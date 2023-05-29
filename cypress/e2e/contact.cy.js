/// <reference types="Cypress" />

describe('contact form', () => {

    beforeEach(() => {
        cy.visit('/about') // http://localhost:5173/about
    })
    
    it('should submit to form', () => {

        cy.get('[data-cy="contact-input-message"]').type('My Message')
        cy.get('[data-cy="contact-input-name"]').type('My Name')
        cy.get('[data-cy="contact-btn-submit"]').then( (el) =>{
            expect(el.attr('disabled')).to.be.undefined
            expect(el.text()).to.equal('Send Message')
        })
        cy.screenshot()
        cy.get('[data-cy="contact-input-email"]').type('test@test.com')
        cy.submitForm()
        cy.screenshot()
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get('@submitBtn').contains('Sending')
        cy.get('@submitBtn').should('have.attr', 'disabled')
        
    })
  
  })