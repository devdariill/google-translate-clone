import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (language: string) => void
  value: string
}

const commonStyles = { height: '200px', border: 0, resize: 'none' }
const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Escribe algo'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}
function TextArea ({ loading, type, value, onChange }: Props) {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <Form.Control
    autoFocus={type === SectionType.From}
    as="textarea"
    disabled={type === SectionType.To}
    placeholder={getPlaceholder({ type, loading })}
    style={styles}
    value={value}
    onChange={handleChange} />
  )
}
export default TextArea
