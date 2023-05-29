/// <reference types="Cypress" />

describe('page navigation', () => {

  beforeEach(() => {
    cy.visit('/') // http://localhost:5173/
  })
  
  it('should navigate between pages', () => {
    
    cy.get('[data-cy="header-about-link"]').click()
    cy.location('pathname').should('equal', '/about') // /about

    //Go back to home page using browser back button
    cy.go('back')
    cy.location('pathname').should('equal', '/') // / -> home page
    cy.get('[data-cy="header-about-link"]').click()
    cy.get('[data-cy="header-home-link"]').click()
    cy.location('pathname').should('equal', '/') // / -> home page

  })

})