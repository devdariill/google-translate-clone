import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromTexto: '',
  result: '',
  loading: false
}

function reducer (state, action) {
  const { type, payload } = action
  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loadin: true,
      fromTexto: payload,
      result: ''
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loadin: false,
      result: payload
    }
  }
  return state
}

function App () {
  const [state, setState] = useState(reducer, initialState)
  return (
 <main>
  <h1>Google Translate</h1>
 </main>
  )
}

export default App
