import { MEDIA_AVERAGE_SCORE_TAG_COLOR_MAP } from './constants'
import {
  TGetMediaAverageScoreTagColorParams,
  TGetMediaAverageScoreTagColorReturn,
  TGetMediaAverageScoreTagColorTypes,
} from './types'

export const getMediaAverageScoreTagColor = (
  params: TGetMediaAverageScoreTagColorParams,
): TGetMediaAverageScoreTagColorReturn => {
  let averageScoreTagType: TGetMediaAverageScoreTagColorTypes = 'small'

  if (params.averageScore < 0) {
    // eslint-disable-next-line no-console
    console.warn('getMediaAverageScoreTagColor: average score below 0%')
  }

  if (params.averageScore > 100) {
    // eslint-disable-next-line no-console
    console.warn('getMediaAverageScoreTagColor: average score above 100%')
  }

  if (params.averageScore >= 50 && params.averageScore <= 80) {
    averageScoreTagType = 'medium'
  } else if (params.averageScore > 80) {
    averageScoreTagType = 'high'
  }

  return MEDIA_AVERAGE_SCORE_TAG_COLOR_MAP[averageScoreTagType]
}
