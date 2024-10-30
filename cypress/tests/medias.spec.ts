import { checkElementInTheDocument } from '../utils/common'
import {
  checkIfActionsAreDisabled,
  filterByTitle,
  getFirstRenderValidation,
  getNextPage,
  paginationNotAvailable,
  selectCategory,
  waitForMediasLoading,
} from '../utils/medias'

describe('Medias', () => {
  describe('Success cases', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    afterEach(() => cy.wait(3000))

    it('Accessing the page and ensuring the necessary elements for navigation', () => {
      checkIfActionsAreDisabled()

      getFirstRenderValidation()
    })

    it('Navigating through all categories', () => {
      waitForMediasLoading()

      selectCategory({ name: 'Tv Show' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()

      selectCategory({ name: 'Movie' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()

      selectCategory({ name: 'Tv Short' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()

      selectCategory({ name: 'Special' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()

      selectCategory({ name: 'OVA' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()

      selectCategory({ name: 'ONA' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()

      selectCategory({ name: 'Music' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()
    })

    it('Filtering by anime titles', () => {
      waitForMediasLoading()

      filterByTitle({ title: 'Naruto' })

      checkIfActionsAreDisabled()

      waitForMediasLoading()
    })

    it('Filtering by anime titles and categories', () => {
      waitForMediasLoading()

      filterByTitle({ title: 'Naruto' })

      waitForMediasLoading()

      selectCategory({ name: 'Tv Show' })

      waitForMediasLoading()
    })

    it('Viewing more pages in the All Formats category', () => {
      waitForMediasLoading()

      getNextPage()
    })

    it('Viewing more pages in the Tv Show category', () => {
      waitForMediasLoading()

      selectCategory({ name: 'Tv Show' })

      waitForMediasLoading()

      getNextPage()
    })

    it('Viewing more pages in the Tv Show category and filtering by anime titles', () => {
      waitForMediasLoading()

      selectCategory({ name: 'Tv Show' })

      waitForMediasLoading()

      getNextPage()

      filterByTitle({ title: 'Death' })

      waitForMediasLoading()

      paginationNotAvailable()
    })

    it('Filtering by anime titles and viewing more pages', () => {
      waitForMediasLoading()

      filterByTitle({ title: 'Naruto' })

      waitForMediasLoading()

      getNextPage()
    })

    it('Reaching the end of a listing', () => {
      waitForMediasLoading()

      filterByTitle({ title: 'Naruto' })

      waitForMediasLoading()

      getNextPage()

      getNextPage()

      getNextPage()

      paginationNotAvailable()
    })

    it('Displaying a "No animes found" message during the search', () => {
      waitForMediasLoading()

      filterByTitle({ title: 'Death' })

      waitForMediasLoading()

      selectCategory({ name: 'Special' })

      checkElementInTheDocument('[data-testid="test-home-medias-not-found"]', true)

      cy.get('[data-testid="test-home-medias-not-found"]').should(
        'have.text',
        'Não conseguimos encontrar resultados para sua busca. Tente usar palavras-chave diferentes.',
      )
    })
  })

  describe('Error cases', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://graphql.anilist.co/', req => {
        if (req.body.operationName === 'Medias') {
          req.reply({
            statusCode: 500,
          })
        }
      })

      cy.visit('/')
    })

    it('Displaying an error message', () => {
      cy.intercept('POST', '**/search?query=cypress', { statusCode: 500 }).as('getServerFailure')

      checkElementInTheDocument('[data-testid="test-home-medias-not-found"]', true)

      cy.get('[data-testid="test-home-medias-not-found"]').should(
        'have.text',
        'Ops! Algo deu errado ao tentar realizar sua busca. Por favor, tente novamente em alguns minutos.',
      )
    })
  })
})
