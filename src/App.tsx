import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'
import { type Action, type State } from './types'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromTexto: '',
  result: '',
  loading: false
}

// function reducer (state: typeof initialState, action) {
function reducer (state: State, action: Action) {
  const { type } = action
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
      fromLanguage: action.payload
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loadin: true,
      fromTexto: action.payload,
      result: ''
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loadin: false,
      result: action.payload
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
