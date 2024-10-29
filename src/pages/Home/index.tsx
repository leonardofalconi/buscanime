import { Theme } from '../../theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { CategoriesFilter } from '../../components/CategoriesFilter'
import { TCategoriesFilterNames, TCategoriesFilterOnChangeParams } from '../../components/CategoriesFilter/types'
import { useState } from 'react'
import { MediaCard } from '../../components/MediaCard'
import { Form } from '../../components/Form'
import { Input } from '../../components/Form/Input'
import { categoriesList, mediaList } from './constants'
import * as Styled from './styles'

export const Home = () => {
  const [currentFilterSelected, setCurrentFilterSelected] = useState<TCategoriesFilterNames>('ALL_FORMATS')

  const onCategoriesFilterChange = (params: TCategoriesFilterOnChangeParams) => setCurrentFilterSelected(params.name)

  const onFormSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = new FormData(event.currentTarget)
    const inputSearchElement = event.currentTarget.search

    inputSearchElement.blur()

    // eslint-disable-next-line no-console
    console.log(`Form search: ${form.get('search')}`)
  }

  // eslint-disable-next-line no-console
  const onButtonSeeMoreClick = () => console.log('see more button clicked')

  return (
    <Styled.Container>
      <Styled.BoxFilterByCategories>
        <CategoriesFilter
          categories={categoriesList}
          onChange={onCategoriesFilterChange}
          value={currentFilterSelected}
        />
      </Styled.BoxFilterByCategories>
      <Styled.BoxFormSearch>
        <Form onSubmit={onFormSearchSubmit}>
          <Input name="search" placeholder="Digite algo aqui..." />
          <PrimaryButton
            backgroundColor={Theme.colors.grape}
            textColor={Theme.colors.white}
            width="4.3rem"
            height="1.9rem"
            fontSize="0.7rem"
            borderRadius="4px"
          >
            Buscar
          </PrimaryButton>
        </Form>
      </Styled.BoxFormSearch>
      <Styled.Medias>
        <Styled.MediaList>
          {mediaList.map(({ id, ...rest }) => (
            <Styled.MediaListItem key={id}>
              <MediaCard {...rest} />
            </Styled.MediaListItem>
          ))}
        </Styled.MediaList>
      </Styled.Medias>
      <Styled.BoxSeeMoreButton>
        <PrimaryButton
          backgroundColor={Theme.colors.selectiveYellow}
          textColor={Theme.colors.white}
          width="100%"
          height="2.4rem"
          fontSize="1rem"
          borderRadius="8px"
          onClick={onButtonSeeMoreClick}
        >
          <p>
            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>+</span>Ver mais
          </p>
        </PrimaryButton>
      </Styled.BoxSeeMoreButton>
    </Styled.Container>
  )
}
