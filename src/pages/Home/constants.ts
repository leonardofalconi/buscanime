import { TCategoriesFilterItem } from '../../components/CategoriesFilter/types'
import { IMediaCardProps } from '../../components/MediaCard/types'
import mediaThumbnailExample from '../../assets/imgs/card-media-thumbnail.example.png'

export const categoriesList: TCategoriesFilterItem[] = [
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

export const mediaList: Array<IMediaCardProps & { id: number }> = [
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
