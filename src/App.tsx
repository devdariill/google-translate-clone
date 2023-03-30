import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { ArrowIcons, CopyIcon, SpeakerIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { AUTO_LANGUAGE } from './constants'
import { useDebounce } from './hooks/useDebounce'
import { useStore } from './hooks/useStore'
import { translate } from './services/translate'
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
  const debounceFromText = useDebounce(fromText, 750)
  useEffect(() => {
    if (debounceFromText === '') return
    translate({ fromLanguage, toLanguage, text: debounceFromText }).then(result => {
      if (result == null) return
      // if (result === null || result === undefined) return
      setResult(result)
    }).catch(() => { setResult('Error') })
  }, [debounceFromText, fromLanguage, toLanguage])
  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => { console.log('copy api fail') })
  }
  const handleSpeaker = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage // 'en-US' 'es-CO'
    utterance.rate = 0.75
    speechSynthesis.speak(utterance)
  }

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
            <div style={{ position:'relative' }}>
              <TextArea loading={loading} type={SectionType.To} value={result} onChange={setResult}/>
              <div style={{ position:'absolute', bottom:0, left:0, display:'flex' }}>
                <Button variant="link" onClick={handleClipboard} > <CopyIcon/> </Button>
                <Button variant="link" onClick={handleSpeaker} > <SpeakerIcon/> </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
