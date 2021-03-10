import { useState, useEffect } from 'react'

export default function useDebounce(value, delay) {
    // State and setters for debounce value
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }

    }, [value])

    return debouncedValue
}