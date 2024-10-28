import { IInputProps } from './types'
import { FC } from 'react'
import * as Styled from './styles'

export const Input: FC<IInputProps> = ({ name, placeholder, type = 'text', value, onChange }) => (
  <Styled.Input
    data-testid={`test-input-${type}`}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)
