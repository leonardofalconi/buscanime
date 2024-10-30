import { FC, memo, ReactNode } from 'react'
import * as Styled from './styles'

const Component: FC<{ children: ReactNode }> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export const Main = memo(Component)
