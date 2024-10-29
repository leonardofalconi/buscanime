import { ThemeProvider } from 'styled-components'
import { Theme } from '../../theme'
import { FC, ReactNode } from 'react'
import GlobalStyles from '../../theme/GlobalStyles'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../../clients/Apollo'

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  </ThemeProvider>
)
