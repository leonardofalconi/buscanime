import { gql } from '@apollo/client'

export const GET_MEDIAS = gql`
  query Medias($page: Int, $perPage: Int, $sort: [MediaSort], $format: MediaFormat, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort, format: $format, search: $search) {
        id
        averageScore
        genres
        format
        title {
          english
          native
          romaji
          userPreferred
        }
        coverImage {
          large
        }
      }
    }
  }
`
