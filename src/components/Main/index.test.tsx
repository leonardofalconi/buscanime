import { render } from '../../tests'

import { Main } from '.'

const mockChildrenText = 'Children'
const MockChildrenComponent = () => <p>{mockChildrenText}</p>

describe('Main component', () => {
  test('children validation', () => {
    const { container } = render(
      <Main>
        <MockChildrenComponent />
      </Main>,
    )

    expect(container).toHaveTextContent(mockChildrenText)
  })
})
