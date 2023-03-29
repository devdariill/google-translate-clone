import { useState } from 'react'
export function useDebounce<T> (value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState()
}

useDebounce<string>('hello', 1000)
