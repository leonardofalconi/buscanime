import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1.4rem;
  gap: 0.5rem;
`

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontMulish.weight.bold};
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`

export const BoxCategories = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: auto;
  flex-wrap: wrap;
`

export const BoxAverageScore = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 1rem -1rem -1rem 0;
`

export const Thumbnail = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
