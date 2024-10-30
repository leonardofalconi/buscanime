import { Theme } from '../../theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { CategoriesFilter } from '../../components/CategoriesFilter'
import { TCategoriesFilterOnChangeParams } from '../../components/CategoriesFilter/types'
import { MediaCard } from '../../components/MediaCard'
import { Form } from '../../components/Form'
import { Input } from '../../components/Form/Input'
import {
  categoriesList,
  MEDIAS_FEEDBACK_ERROR_MESSAGE,
  MEDIAS_FEEDBACK_NOT_FOUND_MESSAGE,
  MEDIAS_INITIAL_STATES,
} from './constants'
import * as Styled from './styles'
import { useMedias } from '../../hooks/useMedias'
import { useCallback, useMemo } from 'react'
import loadingDotsSvg from '../../assets/svgs/loadingDots.svg'
import loadingWindowSvg from '../../assets/svgs/loadingWindow.svg'

export const Home = () => {
  const {
    medias,
    mediasLoading,
    mediasPaginationLoading,
    mediasCalled,
    mediasError,
    mediasCurrentFilters,
    mediasCurrentPagination,
    getMediasNextPage,
    setMediasFilters,
  } = useMedias(MEDIAS_INITIAL_STATES)

  const noMediaFound = useMemo(
    () => !medias?.length && mediasCalled && !mediasLoading,
    [medias, mediasCalled, mediasLoading],
  )

  const isActionsDisable = useMemo(
    () => mediasPaginationLoading || mediasLoading,
    [mediasPaginationLoading || mediasLoading],
  )

  const isPaginationButtonVisible = useMemo(
    () => (!mediasLoading || mediasPaginationLoading) && !noMediaFound && mediasCurrentPagination.hasNextPage,
    [mediasLoading, mediasPaginationLoading, noMediaFound, mediasCurrentPagination.hasNextPage],
  )

  const onCategoriesFilterChange = useCallback(
    (params: TCategoriesFilterOnChangeParams) => {
      const categoryToFilter = params.name !== 'ALL_FORMATS' ? params.name : undefined

      if (isActionsDisable || mediasCurrentFilters.category === categoryToFilter) return

      setMediasFilters({ format: categoryToFilter })
    },
    [isActionsDisable, mediasCurrentFilters.category],
  )

  const onFormSearchSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const form = new FormData(event.currentTarget)
      const inputSearchElement = event.currentTarget.search
      const inputSearchValue = form.get('search')?.toString().trim() || undefined

      if (isActionsDisable || mediasCurrentFilters.title === inputSearchValue) return

      inputSearchElement.blur()

      setMediasFilters({ search: inputSearchValue || undefined })
    },
    [isActionsDisable, mediasCurrentFilters.title],
  )

  const onPaginationButtonClick = useCallback(() => {
    if (isActionsDisable) return

    getMediasNextPage({ page: mediasCurrentPagination.page + 1 })
  }, [isActionsDisable, mediasCurrentPagination.page])

  return (
    <Styled.Container>
      <Styled.BoxFilterByCategories>
        <CategoriesFilter
          disabled={isActionsDisable}
          categories={categoriesList}
          onChange={onCategoriesFilterChange}
          value={mediasCurrentFilters.category || 'ALL_FORMATS'}
        />
      </Styled.BoxFilterByCategories>

      <Styled.BoxFormSearch>
        <Form onSubmit={onFormSearchSubmit}>
          <Input name="search" placeholder="Digite algo aqui..." disabled={isActionsDisable} />
          <PrimaryButton
            backgroundColor={Theme.colors.grape}
            textColor={Theme.colors.white}
            width="4.3rem"
            height="1.9rem"
            fontSize="0.7rem"
            borderRadius="4px"
            disabled={isActionsDisable}
          >
            Buscar
          </PrimaryButton>
        </Form>
      </Styled.BoxFormSearch>

      {mediasLoading && !mediasPaginationLoading ? (
        <Styled.LoadingWindowSvg src={loadingWindowSvg} />
      ) : (
        <Styled.Medias>
          {noMediaFound ? (
            <Styled.NoMediaFoundText>
              {mediasError ? MEDIAS_FEEDBACK_ERROR_MESSAGE : MEDIAS_FEEDBACK_NOT_FOUND_MESSAGE}
            </Styled.NoMediaFoundText>
          ) : (
            <Styled.MediaList>
              {medias?.map(media => (
                <Styled.MediaListItem key={media.id}>
                  <MediaCard
                    averageScore={media.averageScore}
                    thumbnail={media.coverImage.large}
                    title={media.title.userPreferred || media.title.english || media.title.romaji || media.title.native}
                    categoryTags={media.genres}
                  />
                </Styled.MediaListItem>
              ))}
            </Styled.MediaList>
          )}
        </Styled.Medias>
      )}

      {isPaginationButtonVisible && (
        <Styled.BoxSeeMoreButton>
          <PrimaryButton
            backgroundColor={Theme.colors.selectiveYellow}
            textColor={Theme.colors.white}
            width="100%"
            height="2.4rem"
            fontSize="1rem"
            borderRadius="8px"
            onClick={onPaginationButtonClick}
            disabled={isActionsDisable}
          >
            {mediasPaginationLoading ? (
              <Styled.LoadingDotsSvg src={loadingDotsSvg} />
            ) : (
              <Styled.SeeMoreButtonText>
                <Styled.SeeMoreButtonIcon>+</Styled.SeeMoreButtonIcon>Ver mais
              </Styled.SeeMoreButtonText>
            )}
          </PrimaryButton>
        </Styled.BoxSeeMoreButton>
      )}
    </Styled.Container>
  )
}
