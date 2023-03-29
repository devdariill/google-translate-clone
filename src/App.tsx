import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button onClick={interchangeLanguages}>Intercambiar</button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
      {fromLanguage}
    </Container>
  )
}

export default App
