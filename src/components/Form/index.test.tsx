import { fireEvent, render, screen } from '../../tests'
import { Form } from '.'

const mockFormOnSubmit = jest.fn()

const MockButtonSubmitComponent = () => (
  <button type="submit" data-testid="test-form-send">
    Send
  </button>
)

describe('Form component', () => {
  test('should trigger a callback function on form submit', () => {
    render(
      <Form onSubmit={mockFormOnSubmit}>
        <MockButtonSubmitComponent />
      </Form>,
    )

    const formSubmitButton = screen.getByTestId('test-form-send') as HTMLButtonElement

    fireEvent.click(formSubmitButton)

    expect(mockFormOnSubmit).toBeCalledTimes(1)
  })
})
