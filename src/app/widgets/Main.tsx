import { useRef, useEffect } from 'react'

function ClickedOutside(ref: any) {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (ref.current && event.target == ref.current) {
                const clickEvent = new CustomEvent('clicked_outside')
                dispatchEvent(clickEvent)
            }
        }

        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [ref])
}

export default function Main({ children }: LMain) {
    const main = useRef(null)
    ClickedOutside(main)

    return (
        <div ref={main}>{children}</div>
    )
}