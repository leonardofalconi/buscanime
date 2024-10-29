import { TCategoriesLabels, TCategoriesNames } from '../../entities/media'

export type TCategoriesFilterNames = TCategoriesNames | 'ALL_FORMATS'

export type TCategoriesFilterLabels = TCategoriesLabels | 'All Formats'

export type TCategoriesFilterItem = {
  label: TCategoriesFilterLabels
  name: TCategoriesFilterNames
}

export type TCategoriesFilterOnChangeParams = { name: TCategoriesFilterNames }

export interface ICategoriesFilterProps {
  categories: TCategoriesFilterItem[]
  onChange: (params: TCategoriesFilterOnChangeParams) => void
  value: TCategoriesFilterNames
}
