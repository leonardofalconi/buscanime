import { FC, memo } from 'react'

import { ITagProps } from './types'
import * as Styled from './styles'

const Component: FC<ITagProps> = ({ color, fontSize, children }) => {
  return (
    <Styled.Tag data-testid="test-tag" $background={color} $size={fontSize}>
      {children}
    </Styled.Tag>
  )
}

export const Tag = memo(Component)
