export type TGetMediaAverageScoreTagColorTypes = 'high' | 'medium' | 'small'

export type TGetMediaAverageScoreTagColorMap = {
  [key in TGetMediaAverageScoreTagColorTypes]: string
}

export type TGetMediaAverageScoreTagColorParams = {
  averageScore: number
}

export type TGetMediaAverageScoreTagColorReturn = string
