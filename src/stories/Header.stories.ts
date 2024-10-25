import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components/Header'
import { Theme } from '../theme'

const meta = {
  title: 'Contents/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: Theme.colors.grape,
  },
}
