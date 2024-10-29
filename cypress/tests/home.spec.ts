describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('must have a title', () => {
    cy.get('[data-testid="home-title"]').should('contain.text', 'Home')
  })
})
