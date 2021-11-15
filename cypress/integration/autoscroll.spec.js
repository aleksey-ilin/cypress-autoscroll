/// <reference types="cypress" />

describe('autoscroll', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should not work', () => {
    cy.findByText('open side panel').click();
    // fix https://github.com/cypress-io/cypress/pull/18441
    // work in cypress since 9.0.0
    cy.findByText('close side panel').click();
    //hack for cypress before 9.0.0
    // cy.findByText('close side panel').click({ scrollBehavior:false });
  })
})
