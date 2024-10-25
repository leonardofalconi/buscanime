import { FC } from 'react'

import { IPrimaryButtonProps } from './types'
import * as Styled from './styles'

export const PrimaryButton: FC<IPrimaryButtonProps> = ({
  type,
  width,
  height,
  textColor,
  backgroundColor,
  fontSize,
  children,
  onClick,
}) => {
  return (
    <Styled.Button
      data-testid="test-primary-button"
      $type={type}
      $color={textColor}
      $background={backgroundColor}
      $width={width}
      $height={height}
      $size={fontSize}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  )
}
