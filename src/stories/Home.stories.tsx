import type { Meta, StoryObj } from '@storybook/react'
import * as Styled from './styles/home.styles'
import { Header } from '../components/Header'
import { Theme } from '../theme'
import { Footer } from '../components/Footer'
import { PrimaryButton } from '../components/PrimaryButton'
import { CategoriesFilter } from '../components/CategoriesFilter'
import {
  TCategoriesFilterItem,
  TCategoriesFilterNames,
  TCategoriesFilterOnChangeParams,
} from '../components/CategoriesFilter/types'
import { useState } from 'react'
import { MediaCard } from '../components/MediaCard'
import { IMediaCardProps } from '../components/MediaCard/types'
import mediaThumbnailExample from '../assets/imgs/card-media-thumbnail.example.png'
import { Form } from '../components/Form'
import { Input } from '../components/Form/Input'

const categoriesList: TCategoriesFilterItem[] = [
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

const mediaList: Array<IMediaCardProps & { id: number }> = [
  {
    id: 1,
    title: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
    averageScore: 80,
    categoryTags: ['Action', 'Comedy', 'Horror'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 2,
    title: 'Mushoku Tensei ll: Isekai Ittara Honki Dasu',
    averageScore: 83,
    categoryTags: ['Adventure', 'Drama', 'Ecchi'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 3,
    title: 'One Piece',
    averageScore: 83,
    categoryTags: ['Action', 'Comedy', 'Adventure'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 4,
    title: 'Masamune-jun no Revenge R',
    averageScore: 83,
    categoryTags: ['Romance', 'Comedy'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 5,
    title: 'Bleach: Sennen Kessen-hen - Ketsubetsu-tan',
    averageScore: 83,
    categoryTags: ['Action', 'Adventure'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 6,
    title: 'Lv1 Maou to One Room Yuusha',
    averageScore: 83,
    categoryTags: ['Action', 'Comedy', 'Adventure'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 7,
    title: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
    averageScore: 80,
    categoryTags: ['Action', 'Comedy', 'Horror'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 8,
    title: 'Mushoku Tensei ll: Isekai Ittara Honki Dasu',
    averageScore: 83,
    categoryTags: ['Adventure', 'Drama', 'Ecchi'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 9,
    title: 'One Piece',
    averageScore: 83,
    categoryTags: ['Action', 'Comedy', 'Adventure'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 10,
    title: 'Masamune-jun no Revenge R',
    averageScore: 83,
    categoryTags: ['Romance', 'Comedy'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 11,
    title: 'Bleach: Sennen Kessen-hen - Ketsubetsu-tan',
    averageScore: 83,
    categoryTags: ['Action', 'Adventure'],
    thumbnail: mediaThumbnailExample,
  },
  {
    id: 12,
    title: 'Lv1 Maou to One Room Yuusha',
    averageScore: 83,
    categoryTags: ['Action', 'Comedy', 'Adventure'],
    thumbnail: mediaThumbnailExample,
  },
]

const Home = () => {
  const [currentFilterSelected, setCurrentFilterSelected] = useState<TCategoriesFilterNames>('ALL_FORMATS')

  const onCategoriesFilterChange = (params: TCategoriesFilterOnChangeParams) => setCurrentFilterSelected(params.name)

  const onFormSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const inputSearchElement = event.currentTarget.search

    inputSearchElement.blur()
  }

  return (
    <Styled.Container>
      <Header backgroundColor={Theme.colors.grape} />
      <Styled.Main>
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
            onClick={() => ({})}
          >
            <p>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>+</span>Ver mais
            </p>
          </PrimaryButton>
        </Styled.BoxSeeMoreButton>
      </Styled.Main>
      <Footer backgroundColor={Theme.colors.grape} />
    </Styled.Container>
  )
}

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof Home>

export const Default: Story = {
  render: Home,
}
