import { FC } from 'react'
import * as Styled from './styles'
import { IFooterProps } from './types'

export const Footer: FC<IFooterProps> = ({ backgroundColor }) => {
  return (
    <Styled.Container data-testid="test-footer-container" $background={backgroundColor}>
      <Styled.Text data-testid="test-footer-container-text">
        Busc<span>anime</span>
      </Styled.Text>
      <Styled.Copyright data-testid="test-footer-container-copyright">Todos os direitos reservados</Styled.Copyright>
    </Styled.Container>
  )
}
