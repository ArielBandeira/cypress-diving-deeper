/// <reference types="Cypress" />

describe('page navigation', () => {

  beforeEach(() => {
    cy.visit('/') // http://localhost:5173/
  })
  
  it('should navigate between pages', () => {
    
    cy.getById('header-about-link').click()
    cy.location('pathname').should('equal', '/about') // /about

    //Go back to home page using browser back button
    cy.go('back')
    cy.location('pathname').should('equal', '/') // / -> home page
    cy.getById('header-about-link').click()
    cy.getById('header-home-link').click()
    cy.location('pathname').should('equal', '/') // / -> home page

  })

})