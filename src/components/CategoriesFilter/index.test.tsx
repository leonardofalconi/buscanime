import { fireEvent, render, screen } from '../../tests'
import { CategoriesFilter } from '.'
import { TCategoriesFilterItem } from './types'

const mockCategoriesList: TCategoriesFilterItem[] = [
  {
    label: 'All Formats',
    name: 'ALL_FORMATS',
  },
  {
    label: 'Tv Show',
    name: 'TV',
  },
  {
    label: 'Movie',
    name: 'MOVIE',
  },
]

const mockFilterOnChange = jest.fn()

const shouldCategoryActive = (params: { categoryElement: HTMLElement; shouldActive: boolean }) => {
  if (params.shouldActive) {
    expect(params.categoryElement).toHaveStyle({
      backgroundColor: '#6324C6',
      color: '#FFFFFF',
      borderColor: 'transparent',
    })

    return
  }

  expect(params.categoryElement).toHaveStyle({
    backgroundColor: 'transparent',
    color: '#6324C6',
    borderColor: '#6324C6',
  })
}

describe('CategoriesFilter component', () => {
  test('should render a list of categories and set to active according to the value', async () => {
    const categoryActiveIndex = 1

    render(
      <CategoriesFilter
        categories={mockCategoriesList}
        value={mockCategoriesList[categoryActiveIndex].name}
        onChange={mockFilterOnChange}
      />,
    )

    const categoriesButton = screen.getAllByTestId('test-primary-button')

    expect(categoriesButton.length).toEqual(3)

    categoriesButton.forEach((categoryElement, index) =>
      shouldCategoryActive({ categoryElement, shouldActive: index === categoryActiveIndex }),
    )
  })

  test('trigger a callback function when category is selected', () => {
    render(
      <CategoriesFilter
        categories={mockCategoriesList}
        value={mockCategoriesList[0].name}
        onChange={mockFilterOnChange}
      />,
    )

    const categoryButtonMovie = screen.getAllByTestId('test-primary-button')[2]

    fireEvent.click(categoryButtonMovie)

    expect(mockFilterOnChange).toBeCalledTimes(1)
    expect(mockFilterOnChange).toBeCalledWith({ name: mockCategoriesList[2].name })
  })
})
