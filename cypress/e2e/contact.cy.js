/// <reference types="Cypress" />

describe('contact form', () => {
  
    it('should submit to form', () => {

        cy.visit('http://localhost:5173/about')
        cy.get('[data-cy="contact-input-message"]').type('My Message')
        cy.get('[data-cy="contact-input-name"]').type('My Name')
        cy.get('[data-cy="contact-input-email"]').type('test@test.com')
        cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled')
        cy.get('[data-cy="contact-btn-submit"]').click()
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending')
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled')

    })
  
  })