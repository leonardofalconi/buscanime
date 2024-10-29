import type { Meta, StoryObj } from '@storybook/react'
import { MediaCard } from '../components/MediaCard'
import mediaThumbnailExample from '../assets/imgs/card-media-thumbnail.example.png'

const meta = {
  title: 'Contents/MediaCard',
  component: MediaCard,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    averageScore: { control: { type: 'range', min: 0, max: 100 } },
  },
  decorators: [
    Story => (
      <div style={{ display: 'felx', width: '15.8rem', height: '13.5rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MediaCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    averageScore: 40,
    categoryTags: ['Action', 'Comedy', 'Horror'],
    title: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
    thumbnail: mediaThumbnailExample,
  },
}
