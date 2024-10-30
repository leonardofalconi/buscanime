import { FC, memo } from 'react'

import { IPrimaryButtonProps } from './types'
import * as Styled from './styles'

const Component: FC<IPrimaryButtonProps> = ({
  type,
  width,
  height,
  textColor,
  backgroundColor,
  fontSize,
  borderRadius = '4px',
  disabled,
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
      $borderRadius={borderRadius}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Styled.Button>
  )
}

export const PrimaryButton = memo(Component)
