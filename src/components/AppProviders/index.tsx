import { ThemeProvider } from 'styled-components'
import { Theme } from '../../theme'
import { FC, ReactNode } from 'react'

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
)
