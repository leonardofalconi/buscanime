import { FC, memo } from 'react'
import { ICategoriesFilterProps, TCategoriesFilterItem } from './types'
import * as Styled from './styles'
import { PrimaryButton } from '../PrimaryButton'
import { Theme } from '../../theme'

const Component: FC<ICategoriesFilterProps> = ({ categories, onChange, value, disabled }) => {
  const categoryOnSelected = (params: TCategoriesFilterItem) => onChange({ name: params.name })

  return (
    <Styled.Container>
      {categories.map(category => (
        <PrimaryButton
          key={category.name}
          backgroundColor={Theme.colors.grape}
          fontSize="0.7rem"
          type={category.name === value ? 'default' : 'outline'}
          textColor={Theme.colors.white}
          width="auto"
          height="1.5rem"
          borderRadius="4px"
          onClick={() => categoryOnSelected(category)}
          disabled={disabled}
        >
          {category.label}
        </PrimaryButton>
      ))}
    </Styled.Container>
  )
}

export const CategoriesFilter = memo(Component)
