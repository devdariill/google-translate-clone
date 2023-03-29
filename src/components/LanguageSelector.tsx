import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

export const LanguageSelector = ({ onChange }) => {
  return (
        <Form.Select aria-label="Selecciona un idioma">
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={literal}>{literal}</option>
            ))}
        </Form.Select>
  )
}
