import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'
import { SectionType, type FromLanguage, type Language } from '../types.d'

// interface Props {
//   onChange: (language: Language) => void
// }
type Props =
| { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: SectionType.To, value: Language, onChange: (language: Language) => void }
// export const LanguageSelector = ({ onChange }: { onChange: (language: string) => void }) => {
// export const LanguageSelector = ({ onChange }: Props) => {
export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Selecciona un idioma" onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {
        Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={literal}>{literal}</option>
        ))
      }
    </Form.Select>
  )
}
