import styled from 'styled-components'
import { THeaderStyledContainer } from './types'

export const Container = styled.div<THeaderStyledContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $background }) => $background};
  padding: 1rem 0;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.typography.fontMulish.weight.regular};
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.selectiveYellow};
  }
`
