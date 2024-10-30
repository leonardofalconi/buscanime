import { Theme } from '../../theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { CategoriesFilter } from '../../components/CategoriesFilter'
import { MediaCard } from '../../components/MediaCard'
import { Form } from '../../components/Form'
import { Input } from '../../components/Form/Input'
import {
  CATEGORIES_LIST,
  MEDIAS_FEEDBACK_ERROR_MESSAGE,
  MEDIAS_FEEDBACK_NOT_FOUND_MESSAGE,
  MEDIAS_INITIAL_STATES,
} from './constants'
import * as Styled from './styles'
import { useMedias } from '../../hooks/useMedias'
import { useHomeStates } from './useHomeStates'
import loadingDotsSvg from '../../assets/svgs/loadingDots.svg'
import loadingWindowSvg from '../../assets/svgs/loadingWindow.svg'

export const Home = () => {
  const mediasState = useMedias(MEDIAS_INITIAL_STATES)

  const homeStates = useHomeStates({
    getMediasNextPage: mediasState.getMediasNextPage,
    setMediasFilters: mediasState.setMediasFilters,
    mediasCurrentFilters: mediasState.mediasCurrentFilters,
    mediasCurrentPagination: mediasState.mediasCurrentPagination,
    mediasLoading: mediasState.mediasLoading,
    mediasPaginationLoading: mediasState.mediasPaginationLoading,
    mediasNotFound: mediasState.mediasNotFound,
  })

  return (
    <Styled.Container>
      <Styled.BoxFilterByCategories>
        <CategoriesFilter
          disabled={homeStates.isActionsDisable}
          categories={CATEGORIES_LIST}
          onChange={homeStates.onCategoriesFilterChange}
          value={mediasState.mediasCurrentFilters.category || 'ALL_FORMATS'}
        />
      </Styled.BoxFilterByCategories>

      <Styled.BoxFormSearch>
        <Form onSubmit={homeStates.onFormSearchSubmit}>
          <Input name="search" placeholder="Digite algo aqui..." disabled={homeStates.isActionsDisable} />
          <PrimaryButton
            backgroundColor={Theme.colors.grape}
            textColor={Theme.colors.white}
            width="4.3rem"
            height="1.9rem"
            fontSize="0.7rem"
            borderRadius="4px"
            disabled={homeStates.isActionsDisable}
          >
            Buscar
          </PrimaryButton>
        </Form>
      </Styled.BoxFormSearch>

      {mediasState.mediasLoading && !mediasState.mediasPaginationLoading ? (
        <Styled.LoadingWindowSvg data-testid="test-home-loading-window" src={loadingWindowSvg} />
      ) : (
        <Styled.Medias>
          {mediasState.mediasNotFound ? (
            <Styled.NoMediaFoundText data-testid="test-home-medias-not-found">
              {mediasState.mediasError ? MEDIAS_FEEDBACK_ERROR_MESSAGE : MEDIAS_FEEDBACK_NOT_FOUND_MESSAGE}
            </Styled.NoMediaFoundText>
          ) : (
            <Styled.MediaList>
              {mediasState.medias?.map(media => (
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

      {homeStates.isPaginationButtonVisible && (
        <Styled.BoxSeeMoreButton data-testid="test-home-box-pagination">
          <PrimaryButton
            backgroundColor={Theme.colors.selectiveYellow}
            textColor={Theme.colors.white}
            width="100%"
            height="2.4rem"
            fontSize="1rem"
            borderRadius="8px"
            onClick={homeStates.onPaginationButtonClick}
            disabled={homeStates.isActionsDisable}
          >
            {mediasState.mediasPaginationLoading ? (
              <Styled.LoadingDotsSvg data-testid="test-home-loading-dots" src={loadingDotsSvg} />
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
