import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'
import { type FromLanguage, type Language } from '../types'

// interface Props {
//   onChange: (language: Language) => void
// }
type Props =
| { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: 'to', value: Language, onChange: (language: Language) => void }
// export const LanguageSelector = ({ onChange }: { onChange: (language: string) => void }) => {
// export const LanguageSelector = ({ onChange }: Props) => {
export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Selecciona un idioma" onChange={handleChange} value={value}>
      {
        Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={literal}>{literal}</option>
        ))
      }
    </Form.Select>
  )
}
