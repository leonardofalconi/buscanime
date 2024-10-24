describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('must have a title', () => {
    cy.get('[data-testid="home-title"]').should('contain.text', 'Home')
  })
})
