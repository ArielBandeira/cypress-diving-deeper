/// <reference types="Cypress" />

describe('handles empty contact form', () => {

    beforeEach(() => {
        cy.visit('/about') // http://localhost:5173/about
    })

    it('should validate the form input', () => {

        cy.get('[data-cy="contact-input-message"]').as('message')
        cy.get('[data-cy="contact-input-name"]').as('name')
        cy.get('[data-cy="contact-input-email"]').as('email')
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get("@submitBtn").click()
        cy.get("@submitBtn").then(el => {
            expect(el).not.have.attr('disabled')
            expect(el.text()).not.equal('Sending...')
        })
        cy.get('@submitBtn').contains('Send Message')
        cy.get('@message').focus().blur()
        cy.get('@message')
            .parent()
            .should((el) => {
                expect(el.attr('class')).not.to.be.undefined
                expect(el.attr('class')).contains('invalid')
             })
        
        cy.get('@name').focus().blur()
        cy.get('@name')
            .parent()
            .should((el) => {
                expect(el.attr('class')).not.to.be.undefined
                expect(el.attr('class')).contains('invalid')
             })
         cy.get('@email').focus().blur()
         cy.get('@email')
             .parent()
             .should((el) => {
                expect(el.attr('class')).not.to.be.undefined
                expect(el.attr('class')).contains('invalid')
             })

    })
  
  })