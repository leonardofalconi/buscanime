import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 1.9rem;
  padding: 0 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lavenderGray};
  border-radius: 4px;
  font-size: 0.7rem;

  &:disabled {
    opacity: 0.5;
    background-color: transparent;
  }

  &::placeholder {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.lavenderGray};
  }
`
