import { render, screen } from '../../tests'

import { Footer } from '.'

const mockBackgroundColor = '#000000'
const mockText = 'Buscanime'
const mockCopyright = 'Todos os direitos reservados'

describe('Footer component', () => {
  test('render with background custom color', () => {
    render(<Footer backgroundColor={mockBackgroundColor} />)

    const footerContainerElement = screen.getByTestId('test-footer-container')

    expect(footerContainerElement).toHaveStyle({ background: mockBackgroundColor })
  })

  test('render with text Buscanime', () => {
    render(<Footer backgroundColor={mockBackgroundColor} />)

    const footerContainerTitleElement = screen.getByTestId('test-footer-container-text')

    expect(footerContainerTitleElement).toHaveTextContent(mockText)
  })

  test('render with copyright Todos os direitos reservados', () => {
    render(<Footer backgroundColor={mockBackgroundColor} />)

    const footerContainerCopyrightElement = screen.getByTestId('test-footer-container-copyright')

    expect(footerContainerCopyrightElement).toHaveTextContent(mockCopyright)
  })
})
