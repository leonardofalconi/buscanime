import { ReactNode } from 'react'

export interface IFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
}
