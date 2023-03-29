import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'

interface Props {
  onChange: (language: string) => void
}
// export const LanguageSelector = ({ onChange }: { onChange: (language: string) => void }) => {
// export const LanguageSelector = ({ onChange }: Props) => {
export const LanguageSelector: FC<Props> = ({ onChange }) => {
  return (
        <Form.Select aria-label="Selecciona un idioma">
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={literal}>{literal}</option>
            ))}
        </Form.Select>
  )
}
