import { CATEGORIES_LIST } from '../constants/medias'
import { TCategoriesLabels } from '../types/medias'
import { checkElementInTheDocument } from './common'

export const waitForMediasLoading = () => {
  checkElementInTheDocument('[data-testid="test-media-card"]', true)

  cy.wait(2000)
}

export const selectCategory = ({ name }: { name: TCategoriesLabels }) => {
  const categoryIndex = CATEGORIES_LIST.find(category => category.name === name)?.order || -1

  if (categoryIndex < 0) return

  cy.get('[data-testid="test-categories"] button[data-testid="test-primary-button"]').eq(categoryIndex).click()
}

export const filterByTitle = ({ title }: { title: string }) => {
  cy.get('[data-testid="test-input-text"]').type(title)

  cy.get('[data-testid="test-form"] button[data-testid="test-primary-button"]').click()
}

export const getFirstRenderValidation = () => {
  cy.get('[data-testid="test-categories"] button[data-testid="test-primary-button"]').should('have.length', 8)
  cy.get('[data-testid="test-input-text"]').should('exist')
  cy.get('[data-testid="test-form"] button[data-testid="test-primary-button"]').should('exist')

  cy.get('[data-testid="test-home-loading-window"]').should('exist')

  waitForMediasLoading()

  cy.get('[data-testid="test-home-box-pagination"] button[data-testid="test-primary-button"]').should('exist')
}

export const getMediasCount = () =>
  cy.get('[data-testid="test-media-card"]').then(DomElements => {
    const elements = Array.from(DomElements) || []

    return elements.length
  })

export const getNextPage = () => {
  getMediasCount().then(prevCount => {
    cy.get('[data-testid="test-home-box-pagination"] button[data-testid="test-primary-button"]').click()

    checkIfPaginationButtonIsDisabled()

    checkIfActionsAreDisabled()

    cy.get(
      '[data-testid="test-home-box-pagination"] button[data-testid="test-primary-button"] img[data-testid="test-home-loading-dots"]',
    ).should('exist')

    checkElementInTheDocument(
      '[data-testid="test-home-box-pagination"] button[data-testid="test-primary-button"] img[data-testid="test-home-loading-dots"]',
      false,
    )

    getMediasCount().then(currentCount => expect(currentCount).be.greaterThan(prevCount))
  })
}

export const paginationNotAvailable = () =>
  cy.get('[data-testid="test-home-box-pagination"] button[data-testid="test-primary-button"]').should('not.exist')

export const checkIfActionsAreDisabled = () => {
  cy.get('[data-testid="test-categories"] button[data-testid="test-primary-button"]').should('be.disabled')
  cy.get('[data-testid="test-input-text"]').should('be.disabled')
  cy.get('[data-testid="test-form"] button[data-testid="test-primary-button"]').should('be.disabled')
}

export const checkIfPaginationButtonIsDisabled = () =>
  cy.get('[data-testid="test-home-box-pagination"] button[data-testid="test-primary-button"]').should('be.disabled')
