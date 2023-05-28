/// <reference types="Cypress" />

describe('handles empty contact form', () => {

    it('should validate the form input', () => {

        cy.visit('http://localhost:5173/about')
        cy.get('[data-cy="contact-input-message"]').as('message')
        cy.get('[data-cy="contact-input-name"]').as('name')
        cy.get('[data-cy="contact-input-email"]').as('email')
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get("@submitBtn").click()
        cy.get("@submitBtn").then(el => {
            expect(el).not.have.attr('disabled')
            expect(el.text()).to.not.equal('Sending...')
        })
        cy.get('@submitBtn').contains('Send Message')
        cy.get('@message').focus().blur()
        cy.get('@message')
            .parent()
            .should('have.attr', 'class').and('match', /invalid/)
        
        cy.get('@name').focus().blur()
        cy.get('@name')
            .parent()
            .should('have.attr', 'class').and('match', /invalid/)
         cy.get('@email').focus().blur()
         cy.get('@email')
             .parent()
             .should((el) => {
                expect(el.attr('class').not.to.be.undefined)
                expect(el.attr('class').contains('invalid'))
             })

    })
  
  })