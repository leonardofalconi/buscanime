import { render, screen } from '../../tests'
import { Tag } from '.'
import { ITagProps } from './types'

const mockTagLabel = 'Action'
const MockChildrenComponent = () => <p>{mockTagLabel}</p>
const mockDefaultProps: ITagProps = {
  color: '#000000',
  children: <MockChildrenComponent />,
  fontSize: '1rem',
}

describe('Tag component', () => {
  test('render default props', () => {
    render(<Tag {...mockDefaultProps} />)

    const tagContainerElement = screen.getByTestId('test-tag')

    expect(tagContainerElement).toHaveStyle({
      backgroundColor: mockDefaultProps.color,
      fontSize: mockDefaultProps.fontSize,
    })

    expect(tagContainerElement).toHaveTextContent(mockTagLabel)
  })

  test('render custom colors', () => {
    render(<Tag {...mockDefaultProps} color="#FFFFFF" />)

    const tagContainerElement = screen.getByTestId('test-tag')

    expect(tagContainerElement).toHaveStyle({
      backgroundColor: '#FFFFFF',
    })
  })

  test('render custom font size', () => {
    render(<Tag {...mockDefaultProps} fontSize="2rem" />)

    const tagContainerElement = screen.getByTestId('test-tag')

    expect(tagContainerElement).toHaveStyle({
      fontSize: '2rem',
    })
  })
})
