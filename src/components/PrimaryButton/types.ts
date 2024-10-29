import { ReactNode } from 'react'

export type TPrimaryButtonType = 'default' | 'outline'

export interface IPrimaryButtonProps {
  type?: TPrimaryButtonType
  textColor: string
  backgroundColor: string
  fontSize: string
  children: ReactNode
  width: string
  height: string
  borderRadius?: string
  disabled?: boolean
  onClick?: () => void
}

export type TButtonStyled = {
  $size: IPrimaryButtonProps['fontSize']
  $type: IPrimaryButtonProps['type']
  $color: IPrimaryButtonProps['textColor']
  $background: IPrimaryButtonProps['backgroundColor']
  $width: IPrimaryButtonProps['width']
  $height: IPrimaryButtonProps['height']
  $borderRadius: string
}
