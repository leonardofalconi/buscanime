import { FC } from 'react'
import { IFormProps } from './types'

import * as Styled from './styles'

export const Form: FC<IFormProps> = ({ onSubmit, children }) => (
  <Styled.Form
    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(e)
    }}
  >
    {children}
  </Styled.Form>
)
