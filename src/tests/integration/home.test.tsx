import { render, screen } from '..'
import { Home } from '../../pages/Home'

describe('Home page', () => {
  test.skip('must have a title', () => {
    render(<Home />)

    const title = screen.getByTestId('home-title')

    expect(title).toHaveTextContent('Home')
  })
})
