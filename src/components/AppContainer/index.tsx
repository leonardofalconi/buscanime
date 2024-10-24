import { FC, ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import * as Styled from './styles'

export const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Styled.Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Styled.Container>
  )
}
