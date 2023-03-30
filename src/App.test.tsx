import { test, expect } from 'vitest'
import { render } from '@testing-library/react' // render app
import userEvent from '@testing-library/user-event' // user Simulation
import App from './App'

test('App works as expected', async () => {
  const user = userEvent.setup() // simulate user typing
  const app = render(<App />) // render app

  const textareaFrom = app.getByPlaceholderText('Introducir texto') // get textarea

  await user.type(textareaFrom, 'Hola') // simulate user typing
  const result = await app.findByDisplayValue(/Hello/i, {}, { timeout:4000 }) // regex for case insensitive Ii Aa ...

  expect(result).toBeTruthy() // check if result is true
})
