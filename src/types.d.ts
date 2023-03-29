export interface State {
  fromLanguage: string
  toLanguage: string
  fromTexto: string
  result: string
  loading: boolean
}

export type Action =
| { type: 'INTERCHANGE_LANGUAGE' }
| { type: 'SET_FROM_LANGUAGE', payload: string }
| { type: 'SET_TO_LANGUAGE', payload: string }
| { type: 'SET_FROM_TEXT', payload: string }
| { type: 'SET_RESULT', payload: string }
| { type: 'SET_LOADING', payload: boolean }
