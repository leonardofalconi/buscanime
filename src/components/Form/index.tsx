import { FC, memo } from 'react'
import { IFormProps } from './types'

import * as Styled from './styles'

const Component: FC<IFormProps> = ({ onSubmit, children }) => (
  <Styled.Form
    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(e)
    }}
  >
    {children}
  </Styled.Form>
)

export const Form = memo(Component)
