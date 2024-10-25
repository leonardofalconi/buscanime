import { render, screen } from '../../tests'
import { Header } from '.'

const mockBackgroundColor = '#000000'
const mockTitle = 'Buscanime'

describe('Header component', () => {
  test('render with background custom color', () => {
    render(<Header backgroundColor={mockBackgroundColor} />)

    const headerContainerElement = screen.getByTestId('test-header-container')

    expect(headerContainerElement).toHaveStyle({ background: mockBackgroundColor })
  })

  test('render with title Buscanime', () => {
    render(<Header backgroundColor={mockBackgroundColor} />)

    const headerContainerTitleElement = screen.getByTestId('test-header-container-title')

    expect(headerContainerTitleElement).toHaveTextContent(mockTitle)
  })
})
