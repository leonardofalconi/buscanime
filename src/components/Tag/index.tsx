import { FC } from 'react'

import { ITagProps } from './types'
import * as Styled from './styles'

export const Tag: FC<ITagProps> = ({ color, fontSize, children }) => {
  return (
    <Styled.Tag data-testid="test-tag" $background={color} $size={fontSize}>
      {children}
    </Styled.Tag>
  )
}
