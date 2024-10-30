import { IInputProps } from './types'
import { FC, memo } from 'react'
import * as Styled from './styles'

const Component: FC<IInputProps> = ({ name, placeholder, type = 'text', value, onChange, disabled }) => (
  <Styled.Input
    data-testid={`test-input-${type}`}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
)

export const Input = memo(Component)
