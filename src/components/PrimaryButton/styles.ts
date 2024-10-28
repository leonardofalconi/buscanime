import styled, { css } from 'styled-components'
import { TButtonStyled } from './types'

export const Button = styled.button<TButtonStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  background-color: ${({ $background }) => $background};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => $size};
  line-height: ${({ $size }) => $size};
  text-align: center;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: 1px solid transparent;

  transition:
    background-color,
    color,
    border-color,
    0.3s ease-in-out;

  ${({ $type, $background }) =>
    $type === 'outline' &&
    css`
      background-color: transparent;
      color: ${$background};
      border-color: ${$background};
    `};
`
