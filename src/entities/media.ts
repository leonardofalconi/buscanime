export type TCategoriesLabels = 'Tv Show' | 'Movie' | 'Tv Short' | 'Special' | 'OVA' | 'ONA' | 'Music'

export type TCategoriesNames = 'TV' | 'MOVIE' | 'TV_SHORT' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC'

export type TMediasSortTypes = 'POPULARITY_DESC'

export interface IMedia {
  id: number
  title: {
    userPreferred: string
    english: string
    romaji: string
    native: string
  }
  averageScore: number
  format: TCategoriesNames
  genres: Array<string>
  coverImage: {
    large: string
  }
}
