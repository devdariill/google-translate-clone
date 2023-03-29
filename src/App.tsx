import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import { ArrowIcons } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { AUTO_LANGUAGE } from './constants'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector type="from" value={fromLanguage} onChange={setFromLanguage}/>
          {fromLanguage}
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowIcons/></Button>
        </Col>
        <Col>
          <LanguageSelector type="to" value={toLanguage} onChange={setToLanguage}/>
          {toLanguage}
        </Col>
      </Row>
      {fromLanguage}
    </Container>
  )
}

export default App
