import { FC, memo } from 'react'
import * as Styled from './styles'
import { IHeaderProps } from './types'

const Component: FC<IHeaderProps> = ({ backgroundColor }) => {
  return (
    <Styled.Container data-testid="test-header-container" $background={backgroundColor}>
      <Styled.Title data-testid="test-header-container-title">
        Busc<span>anime</span>
      </Styled.Title>
    </Styled.Container>
  )
}

export const Header = memo(Component)
