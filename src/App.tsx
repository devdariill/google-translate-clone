import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import { ArrowIcons } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { AUTO_LANGUAGE } from './constants'
import { useStore } from './hooks/useStore'
import { SectionType } from './types.d'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}/>
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowIcons/></Button>
        </Col>
        <Col>
          <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
