export type TInputType = 'text'

export interface IInputProps {
  name: string
  placeholder?: string
  value?: string
  type?: TInputType
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
