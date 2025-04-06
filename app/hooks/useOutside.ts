import { useCallback, useEffect, useRef, useState } from 'react'

export const useOutside = (initialState: boolean) => {
	const ref = useRef<HTMLElement>(null)
	const [isShow, setIsShow] = useState(initialState)

	const handleClick = useCallback((event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [handleClick])
	return { ref, isShow, setIsShow }
}
