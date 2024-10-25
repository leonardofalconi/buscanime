import styled, { css } from 'styled-components'
import { TFooterStyledContainer } from './types'

const FooterFontBase = css`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontMulish.weight.regular};
  text-transform: uppercase;
`

export const Container = styled.div<TFooterStyledContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $background }) => $background};
  padding: 0.5rem 0;
  gap: 0.5rem 0;
`

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;

  ${FooterFontBase};

  span {
    color: ${({ theme }) => theme.colors.selectiveYellow};
  }
`

export const Copyright = styled.p`
  font-size: 0.5rem;
  line-height: 0.5rem;

  ${FooterFontBase};
`
