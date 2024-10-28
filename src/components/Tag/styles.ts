import styled from 'styled-components'
import { TTagStyled } from './types'

export const Tag = styled.div<TTagStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background-color: ${({ $background }) => $background};
  color: ${({ theme }) => theme.colors.platinum};
  font-size: ${({ $size }) => $size};
  line-height: ${({ $size }) => $size};
  text-align: center;
  border-radius: 4px;
`
