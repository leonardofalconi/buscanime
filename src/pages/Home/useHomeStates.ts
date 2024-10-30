import { useCallback, useMemo } from 'react'
import { IUseHomeStatesProps, TOnCategoriesFilterChangeParams, TOnFormSearchSubmitParams } from './types'

export const useHomeStates = (props: IUseHomeStatesProps) => {
  const isActionsDisable = useMemo(
    () => props.mediasPaginationLoading || props.mediasLoading,
    [props.mediasLoading, props.mediasPaginationLoading],
  )

  const isPaginationButtonVisible = useMemo(
    () =>
      (!props.mediasLoading || props.mediasPaginationLoading) &&
      !props.mediasNotFound &&
      props.mediasCurrentPagination.hasNextPage,
    [
      props.mediasLoading,
      props.mediasPaginationLoading,
      props.mediasNotFound,
      props.mediasCurrentPagination.hasNextPage,
    ],
  )

  const onCategoriesFilterChange = useCallback(
    (params: TOnCategoriesFilterChangeParams) => {
      const categoryToFilter = params.name !== 'ALL_FORMATS' ? params.name : undefined

      if (isActionsDisable || props.mediasCurrentFilters.category === categoryToFilter) return

      props.setMediasFilters({ format: categoryToFilter })
    },
    [isActionsDisable, props],
  )

  const onFormSearchSubmit = useCallback(
    (event: TOnFormSearchSubmitParams) => {
      const form = new FormData(event.currentTarget)
      const inputSearchElement = event.currentTarget.search
      const inputSearchValue = form.get('search')?.toString().trim() || undefined

      if (isActionsDisable || props.mediasCurrentFilters.title === inputSearchValue) return

      inputSearchElement.blur()

      props.setMediasFilters({ search: inputSearchValue || undefined })
    },
    [isActionsDisable, props],
  )

  const onPaginationButtonClick = useCallback(() => {
    if (isActionsDisable) return

    props.getMediasNextPage({ page: props.mediasCurrentPagination.page + 1 })
  }, [isActionsDisable, props])

  return {
    isActionsDisable,
    isPaginationButtonVisible,
    onCategoriesFilterChange,
    onFormSearchSubmit,
    onPaginationButtonClick,
  }
}
