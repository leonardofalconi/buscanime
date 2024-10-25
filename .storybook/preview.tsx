import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme'
import GlobalStyles from '../src/theme/GlobalStyles'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
