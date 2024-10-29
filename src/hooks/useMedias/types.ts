import { ApolloError } from '@apollo/client'
import { IMedia, TCategoriesNames } from '../../entities/media'

export type TMediasQueryFiltersSortTypes = 'POPULARITY_DESC'

export type TMediasQueryFilters = {
  page: number
  perPage: number
  sort?: TMediasQueryFiltersSortTypes
  format?: TCategoriesNames
  search?: string
}

export type TMediasQueryData = {
  Page: {
    media: IMedia[]
  }
}

export type TUseMediasGetMediasNextPageParams = Pick<TMediasQueryFilters, 'page'>

export type TUseMediasSetMediasFiltersParams = Omit<TMediasQueryFilters, 'page' | 'perPage'>

export type TUseMediasCurrentPagination = Pick<TMediasQueryFilters, 'page' | 'perPage'>

export interface IUseMediasReturn {
  mediasLoading: boolean
  mediasPaginationLoading: boolean
  mediasError?: ApolloError
  mediasCalled: boolean
  mediasCurrentPagination: { page: number; perPage: number }
  mediasCurrentFilters: { category?: TCategoriesNames; title?: string }
  medias?: IMedia[]
  getMediasPage: (params: TUseMediasGetMediasNextPageParams) => void
  setMediasFilters: (params: TUseMediasSetMediasFiltersParams) => void
}
