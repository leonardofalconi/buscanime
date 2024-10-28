import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '../components/Tag'
import { Theme } from '../theme'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
  args: { color: Theme.colors.grape },
  decorators: [
    Story => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Action',
    fontSize: '0.6rem',
  },
}

export const ScoreHigh: Story = {
  args: {
    children: '80%',
    fontSize: '1.2rem',
    color: Theme.colors.persianGreen,
  },
}

export const ScoreMedium: Story = {
  args: {
    children: '60%',
    fontSize: '1.2rem',
    color: Theme.colors.selectiveYellow,
  },
}

export const ScoreSmall: Story = {
  args: {
    children: '20%',
    fontSize: '1.2rem',
    color: Theme.colors.crayola,
  },
}
