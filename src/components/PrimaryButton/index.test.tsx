import { render, screen, fireEvent } from '../../tests'
import { PrimaryButton } from '.'
import { IPrimaryButtonProps } from './types'

const mockButtonLabel = 'Click me'
const MockChildrenComponent = () => <p>{mockButtonLabel}</p>
const mockDefaultProps: Omit<IPrimaryButtonProps, 'onClick'> & { onClick: jest.Mock } = {
  backgroundColor: '#000000',
  children: <MockChildrenComponent />,
  fontSize: '1rem',
  height: '10rem',
  width: '20rem',
  textColor: '#CCCCCC',
  type: 'default',
  onClick: jest.fn(),
}

describe('PrimaryButton component', () => {
  beforeEach(() => {
    mockDefaultProps.onClick.mockClear()
  })

  test('render default props', () => {
    render(<PrimaryButton {...mockDefaultProps} />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    expect(buttonContainerElement).toHaveStyle({
      backgroundColor: mockDefaultProps.backgroundColor,
      fontSize: mockDefaultProps.fontSize,
      height: mockDefaultProps.height,
      width: mockDefaultProps.width,
      color: mockDefaultProps.textColor,
      borderRadius: '4px',
    })

    expect(buttonContainerElement).toHaveTextContent(mockButtonLabel)
  })

  test('render custom colors', () => {
    render(<PrimaryButton {...mockDefaultProps} backgroundColor="red" textColor="blue" />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    expect(buttonContainerElement).toHaveStyle({
      backgroundColor: 'red',
      color: 'blue',
    })
  })

  test('render custom width and height', () => {
    render(<PrimaryButton {...mockDefaultProps} width="100px" height="200px" />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    expect(buttonContainerElement).toHaveStyle({
      width: '100px',
      height: '200px',
    })
  })

  test('render custom font size', () => {
    render(<PrimaryButton {...mockDefaultProps} fontSize="100px" />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    expect(buttonContainerElement).toHaveStyle({
      fontSize: '100px',
    })
  })

  test('render outline', () => {
    render(<PrimaryButton {...mockDefaultProps} type="outline" />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    expect(buttonContainerElement).toHaveStyle({
      backgroundColor: 'transparent',
      borderColor: mockDefaultProps.backgroundColor,
      color: mockDefaultProps.backgroundColor,
    })
  })

  test('click must have to trigger onCLick event', () => {
    render(<PrimaryButton {...mockDefaultProps} type="outline" />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    fireEvent.click(buttonContainerElement)

    expect(mockDefaultProps.onClick).toBeCalledTimes(1)
  })

  test('render custom border radius', () => {
    render(<PrimaryButton {...mockDefaultProps} borderRadius="8px" />)

    const buttonContainerElement = screen.getByTestId('test-primary-button')

    expect(buttonContainerElement).toHaveStyle({
      borderRadius: '8px',
    })
  })
})
