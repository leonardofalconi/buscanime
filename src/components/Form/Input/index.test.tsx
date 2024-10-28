import { render, screen, fireEvent } from '../../../tests'
import { Input } from './'
import { IInputProps } from './types'

const mockInputProps: Omit<IInputProps, 'onChange'> & { [keyname: string]: string | jest.Mock; onChange: jest.Mock } = {
  name: 'search',
  type: 'text',
  placeholder: 'Digite algo aqui...',
  onChange: jest.fn(),
}

describe('Form input component', () => {
  test('render input text', () => {
    render(<Input {...mockInputProps} />)

    const inputElement = screen.getByTestId('test-input-text')

    Object.keys(mockInputProps).forEach(key => {
      if (key === 'onChange') return

      expect(inputElement).toHaveAttribute(key, mockInputProps[key])
    })
  })

  test('render default input type', () => {
    const mockInputPropsWithoutType = { ...mockInputProps, type: undefined }

    render(<Input {...mockInputPropsWithoutType} />)

    const inputElement = screen.getByTestId('test-input-text')

    expect(inputElement).toHaveAttribute('type', 'text')
  })

  test('must have to trigger a callback function on input change', () => {
    render(<Input {...mockInputProps} />)

    const inputElement = screen.getByTestId('test-input-text') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'Hello' } })

    expect(mockInputProps.onChange).toBeCalledTimes(1)
    expect(inputElement.value).toEqual('Hello')
  })
})
