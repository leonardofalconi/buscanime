import type { Meta, StoryObj } from '@storybook/react'
import { CategoriesFilter } from '../components/CategoriesFilter'
import {
  TCategoriesFilterItem,
  TCategoriesFilterNames,
  TCategoriesFilterOnChangeParams,
} from '../components/CategoriesFilter/types'
import { useState } from 'react'

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
]

const CategoriesFilterComponent = () => {
  const [currentFilterSelected, setCurrentFilterSelected] = useState<TCategoriesFilterNames>('ALL_FORMATS')

  const onCategoriesFilterChange = (params: TCategoriesFilterOnChangeParams) => setCurrentFilterSelected(params.name)

  return (
    <CategoriesFilter categories={categoriesList} onChange={onCategoriesFilterChange} value={currentFilterSelected} />
  )
}

const meta = {
  title: 'Contents/CategoriesFilter',
  component: CategoriesFilterComponent,
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof CategoriesFilterComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: CategoriesFilterComponent,
}
