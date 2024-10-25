import { FC, ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import * as Styled from './styles'
import { Theme } from '../../theme'

export const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Styled.Container>
      <Header backgroundColor={Theme.colors.grape} />
      <Main>{children}</Main>
      <Footer backgroundColor={Theme.colors.grape} />
    </Styled.Container>
  )
}
