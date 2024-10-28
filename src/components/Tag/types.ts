import { ReactNode } from 'react'

export interface ITagProps {
  color: string
  fontSize: string
  children: ReactNode
}

export type TTagStyled = {
  $size: ITagProps['fontSize']
  $background: ITagProps['color']
}
