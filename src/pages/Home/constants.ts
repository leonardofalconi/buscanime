import { TCategoriesFilterItem } from '../../components/CategoriesFilter/types'
import { TMediasQueryFilters } from '../../hooks/useMedias/types'

export const MEDIAS_INITIAL_STATES: TMediasQueryFilters = {
  page: 1,
  perPage: 12,
  sort: 'POPULARITY_DESC',
}

export const MEDIAS_FEEDBACK_NOT_FOUND_MESSAGE =
  'Não conseguimos encontrar resultados para sua busca. Tente usar palavras-chave diferentes.'

export const MEDIAS_FEEDBACK_ERROR_MESSAGE =
  'Ops! Algo deu errado ao tentar realizar sua busca. Por favor, tente novamente em alguns minutos.'

export const CATEGORIES_LIST: TCategoriesFilterItem[] = [
  {
    label: 'All Formats',
    name: 'ALL_FORMATS',
  },
  {
    label: 'Tv Show',
    name: 'TV',
  },
  {
    label: 'Movie',
    name: 'MOVIE',
  },
  {
    label: 'Tv Short',
    name: 'TV_SHORT',
  },
  {
    label: 'Special',
    name: 'SPECIAL',
  },
  {
    label: 'OVA',
    name: 'OVA',
  },
  {
    label: 'ONA',
    name: 'ONA',
  },
  {
    label: 'Music',
    name: 'MUSIC',
  },
]
