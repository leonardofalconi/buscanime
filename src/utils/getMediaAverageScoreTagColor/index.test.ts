import { getMediaAverageScoreTagColor } from '.'

jest.mock('./constants', () => ({
  MEDIA_AVERAGE_SCORE_TAG_COLOR_MAP: {
    small: '#000000',
    medium: '#CCCCCC',
    high: '#FFFFFF',
  },
}))

const spyOnConsoleWarn = jest.spyOn(window.console, 'warn')

describe('Utils - getMediaAverageScoreTagColor', () => {
  beforeEach(() => {
    spyOnConsoleWarn.mockClear()
  })

  test('get color from average score < 50', () => {
    let averageColor = getMediaAverageScoreTagColor({ averageScore: 49 })

    expect(averageColor).toEqual('#000000')

    averageColor = getMediaAverageScoreTagColor({ averageScore: 50 })

    expect(averageColor).not.toEqual('#000000')
  })

  test('get color from average score <= 50 and >= 80', () => {
    let averageColor = getMediaAverageScoreTagColor({ averageScore: 50 })

    expect(averageColor).toEqual('#CCCCCC')

    averageColor = getMediaAverageScoreTagColor({ averageScore: 51 })

    expect(averageColor).toEqual('#CCCCCC')

    averageColor = getMediaAverageScoreTagColor({ averageScore: 80 })

    expect(averageColor).toEqual('#CCCCCC')

    averageColor = getMediaAverageScoreTagColor({ averageScore: 81 })

    expect(averageColor).not.toEqual('#CCCCCC')
  })

  test('get color from average score > 80', () => {
    let averageColor = getMediaAverageScoreTagColor({ averageScore: 79 })

    expect(averageColor).not.toEqual('#FFFFFF')

    averageColor = getMediaAverageScoreTagColor({ averageScore: 80 })

    expect(averageColor).not.toEqual('#FFFFFF')

    averageColor = getMediaAverageScoreTagColor({ averageScore: 100 })

    expect(averageColor).toEqual('#FFFFFF')
  })

  test('get warn from average score < 0', () => {
    getMediaAverageScoreTagColor({ averageScore: -1 })

    expect(spyOnConsoleWarn).toBeCalledTimes(1)
    expect(spyOnConsoleWarn).toBeCalledWith('getMediaAverageScoreTagColor: average score below 0%')
  })

  test('get warn from average score > 100', () => {
    getMediaAverageScoreTagColor({ averageScore: 101 })

    expect(spyOnConsoleWarn).toBeCalledTimes(1)
    expect(spyOnConsoleWarn).toBeCalledWith('getMediaAverageScoreTagColor: average score above 100%')
  })
})
