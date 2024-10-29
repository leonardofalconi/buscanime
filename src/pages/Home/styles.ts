import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BoxFilterByCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Medias = styled.div`
  display: flex;
  flex-direction: column;
`

export const MediaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.4rem;
`

export const MediaListItem = styled.div`
  display: flex;
  width: 25%;
  padding: 0.4rem;
  width: 50%;

  ${({ theme }) => theme.media.tablet.query} {
    width: 33%;
  }

  ${({ theme }) => theme.media.HD.query} {
    width: 25%;
  }
`

export const BoxFormSearch = styled.div`
  display: flex;
  padding: 1.2rem 0;

  form {
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    input {
      max-width: 45.75rem;
    }

    button {
      flex-shrink: 0;
    }
  }
`

export const BoxSeeMoreButton = styled.div`
  display: flex;
  padding-top: 1.2rem;
`
