import { ThemeProvider } from 'styled-components'
import { Theme } from '../../theme'
import { FC, ReactNode } from 'react'
import GlobalStyles from '../../theme/GlobalStyles'

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
