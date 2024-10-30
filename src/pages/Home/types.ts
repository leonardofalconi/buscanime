import { TCategoriesNames, TMediasSortTypes } from '../../entities/media'

export type TOnFormSearchSubmitParams = React.FormEvent<HTMLFormElement>

export type TOnCategoriesFilterChangeParams = { name: TCategoriesNames | 'ALL_FORMATS' }

export interface IUseHomeStatesProps {
  getMediasNextPage: (params: { page: number }) => void
  setMediasFilters: (params: { sort?: TMediasSortTypes; format?: TCategoriesNames; search?: string }) => void
  mediasCurrentFilters: { category?: TCategoriesNames; title?: string }
  mediasCurrentPagination: { page: number; perPage: number; hasNextPage: boolean }
  mediasLoading: boolean
  mediasPaginationLoading: boolean
  mediasNotFound: boolean
}

export type TUseHomeStatesReturn = {
  isActionsDisable: boolean
  isPaginationButtonVisible: boolean
  onCategoriesFilterChange: (params: TOnCategoriesFilterChangeParams) => void
  onFormSearchSubmit: (event: TOnFormSearchSubmitParams) => void
  onPaginationButtonClick: () => void
}
