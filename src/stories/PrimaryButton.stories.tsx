import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { PrimaryButton } from '../components/PrimaryButton'
import { Theme } from '../theme'

const meta = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
  args: { fontSize: '0.7rem', type: 'default', textColor: Theme.colors.white, onClick: fn() },
} satisfies Meta<typeof PrimaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: Theme.colors.grape,
    children: 'Click me',
    width: '10rem',
    height: '1.5rem',
  },
}

export const Outline: Story = {
  args: {
    type: 'outline',
    backgroundColor: Theme.colors.grape,
    children: 'Click me',
    width: '10rem',
    height: '1.5rem',
  },
}

export const Pagination: Story = {
  args: {
    backgroundColor: Theme.colors.selectiveYellow,
    textColor: Theme.colors.white,
    children: (
      <p>
        <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>+</span>Ver mais
      </p>
    ),
    width: '100%',
    height: '2.4rem',
    fontSize: '1rem',
    borderRadius: '8px',
  },
}
