import { FC, memo, useMemo } from 'react'
import * as Styled from './styles'
import { IMediaCardProps } from './types'
import { Tag } from '../Tag'
import { Theme } from '../../theme'
import { getMediaAverageScoreTagColor } from '../../utils/getMediaAverageScoreTagColor'

const Component: FC<IMediaCardProps> = ({ averageScore, categoryTags, thumbnail, title }) => {
  const tagAverageScoreColor = useMemo(() => getMediaAverageScoreTagColor({ averageScore }), [averageScore])

  return (
    <Styled.Container data-testid="test-media-card">
      <Styled.Content>
        <Styled.Title data-testid="test-media-card-title">{title}</Styled.Title>
        <Styled.BoxCategories data-testid="test-media-card-box-categories-score">
          {categoryTags.map(tag => (
            <Tag key={tag} color={Theme.colors.grape} fontSize="0.6rem">
              {tag}
            </Tag>
          ))}
        </Styled.BoxCategories>
        <Styled.BoxAverageScore data-testid="test-media-card-box-average-score">
          <Tag color={tagAverageScoreColor} fontSize="1.2rem">
            {averageScore}%
          </Tag>
        </Styled.BoxAverageScore>
      </Styled.Content>
      <Styled.Thumbnail data-testid="test-media-card-thumbnail" src={thumbnail} />
      <Styled.Overlay />
    </Styled.Container>
  )
}

export const MediaCard = memo(Component)
