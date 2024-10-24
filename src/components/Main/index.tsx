import { FC, ReactNode } from 'react'
import * as Styled from './styles'

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}
