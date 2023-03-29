// import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react'
import './App.css'
import { initialState, reducer } from './hooks/useStore'

function App () {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)
  console.log(fromLanguage)
  return (
 <main>
  <h1>Google Translate</h1>
  <button onClick={() => { dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' }) }}>
    Cambiar a Español
  </button>
  {fromLanguage}
 </main>
  )
}

export default App
