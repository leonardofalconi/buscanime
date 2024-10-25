import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from '../components/Footer'
import { Theme } from '../theme'

const meta = {
  title: 'Contents/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: Theme.colors.grape,
  },
}
