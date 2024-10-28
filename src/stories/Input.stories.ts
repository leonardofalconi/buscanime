import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Input } from '../components/Form/Input'
import { Theme } from '../theme'

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio' },
  },
  args: { onChange: fn(), name: 'search' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite algo aqui...',
  },
}
