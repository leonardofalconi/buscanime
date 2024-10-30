import { NetworkStatus, useQuery } from '@apollo/client'
import { GET_MEDIAS } from '../../graphql/medias'
import {
  TMediasQueryData,
  TMediasQueryFilters,
  TUseMediasSetMediasFiltersParams,
  IUseMediasReturn,
  TUseMediasGetMediasNextPageParams,
  TUseMediasCurrentPagination,
} from './types'
import { useCallback, useMemo, useState } from 'react'
import { IMedia } from '../../entities/media'

export const useMedias = (INITIAL_STATES: TMediasQueryFilters): IUseMediasReturn => {
  const { loading, error, data, called, fetchMore, refetch, variables, networkStatus } = useQuery<
    TMediasQueryData,
    TMediasQueryFilters
  >(GET_MEDIAS, {
    variables: { ...INITIAL_STATES },
    notifyOnNetworkStatusChange: true,
  })

  const [mediasCurrentPagination, setMediasCurrentPagination] = useState<TUseMediasCurrentPagination>({
    page: INITIAL_STATES.page,
    perPage: INITIAL_STATES.perPage,
  })

  const hasNextPage = useMemo(
    () => data?.Page.media.length === INITIAL_STATES.perPage * mediasCurrentPagination.page,
    [data, mediasCurrentPagination],
  )

  const getNextPage = useCallback(async (params: TUseMediasGetMediasNextPageParams) => {
    await fetchMore({
      variables: { ...params },
      updateQuery(previousData, { fetchMoreResult }) {
        const previousMedias = previousData.Page.media.slice(0)
        const currentMedias = fetchMoreResult.Page.media.slice(0)
        const updatedMedias = [...previousMedias, ...currentMedias]

        return { ...previousData, Page: { media: updatedMedias } }
      },
    })

    setMediasCurrentPagination(prevState => ({ ...prevState, ...params }))
  }, [])

  const setFilters = useCallback(async (params: TUseMediasSetMediasFiltersParams) => {
    await refetch(params)

    setMediasCurrentPagination(prevState => ({ ...prevState, page: 1 }))
  }, [])

  const getFormattedMedias = useCallback(
    (medias: IMedia[]): IMedia[] => medias.map(media => ({ ...media, averageScore: media.averageScore || 0 })),
    [],
  )

  return {
    mediasLoading: loading,
    mediasPaginationLoading: networkStatus === NetworkStatus.fetchMore,
    mediasError: error,
    mediasCalled: called,
    mediasCurrentPagination: { ...mediasCurrentPagination, hasNextPage },
    mediasCurrentFilters: { category: variables?.format, title: variables?.search },
    medias: data?.Page.media ? getFormattedMedias(data?.Page.media) : [],
    getMediasNextPage: getNextPage,
    setMediasFilters: setFilters,
  }
}