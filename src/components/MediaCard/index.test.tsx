import { render, screen } from '../../tests'
import { MediaCard } from '.'
import { IMediaCardProps } from './types'

const mockComponentProps: IMediaCardProps = {
  averageScore: 30,
  categoryTags: ['Action'],
  thumbnail: 'example.png',
  title: 'Card title example',
}

describe('MediaCard component', () => {
  test('render success', () => {
    render(<MediaCard {...mockComponentProps} />)

    const mediaCardTitleElement = screen.getByTestId('test-media-card-title')
    const mediaCardTagsElement = screen
      .getByTestId('test-media-card-box-categories-score')
      .querySelectorAll('[data-testid="test-tag"]')
    const mediaCardTagAverageScoreElement = screen
      .getByTestId('test-media-card-box-average-score')
      .querySelector('[data-testid="test-tag"]')
    const mediaCardThumbailElement = screen.getByTestId('test-media-card-thumbnail')

    expect(mediaCardTitleElement).toHaveTextContent(mockComponentProps.title)
    expect(mediaCardTagsElement.length).toEqual(1)
    expect(mediaCardTagAverageScoreElement).toHaveTextContent(mockComponentProps.averageScore.toString())
    expect(mediaCardThumbailElement).toHaveAttribute('src', mockComponentProps.thumbnail)
  })

  test('render more categories than 1', () => {
    const mockComponentPropsWithTwoCategories = { ...mockComponentProps, categoryTags: ['Action', 'Comedy'] }

    render(<MediaCard {...mockComponentPropsWithTwoCategories} />)

    const mediaCardTagsElement = screen
      .getByTestId('test-media-card-box-categories-score')
      .querySelectorAll('[data-testid="test-tag"]')

    expect(mediaCardTagsElement.length).toEqual(2)
  })
})
