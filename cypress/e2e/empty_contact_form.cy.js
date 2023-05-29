/// <reference types="Cypress" />

describe('handles empty contact form', () => {

    beforeEach(() => {
        cy.visit('/about') // http://localhost:5173/about
    })

    it('should validate the form input', () => {

        cy.getById('contact-input-message').as('message')
        cy.getById('contact-input-name').as('name')
        cy.getById('contact-input-email').as('email')
        cy.getById('contact-btn-submit').as('submitBtn')
        cy.submitForm()
        cy.get('@submitBtn').then(el => {
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