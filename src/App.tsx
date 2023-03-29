import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { ArrowIcons } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { AUTO_LANGUAGE } from './constants'
import { useStore } from './hooks/useStore'
import { SectionType } from './types.d'

function App () {
  const {
    loading,
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    fromText,
    result,
    setFromText,
    setResult
  } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}/>
            <TextArea type={SectionType.From} value={fromText} onChange={setFromText}/>
          </Stack>
        </Col>
        <Col xs="auto">
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowIcons/></Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage}/>
           <TextArea loading={loading} type={SectionType.To} value={result} onChange={setResult}/>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
