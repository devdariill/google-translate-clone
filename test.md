pnpm add vitest happy-dom @testing-library/react @testing-library/user-event -D

vite.conf.ts
```js
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment:'happy-dom'
  }
})
```
