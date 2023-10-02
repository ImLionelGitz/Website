import { useRef } from 'react'

/**
 * Creates a main holder for a page
 * @emits CustomEvent called `clicked_outside`
 */

export default function Main({ children, className }: LMain) {
    const main = useRef<HTMLDivElement>(null)
    const _class = (className) ? ` ${className}` : ''

    function handleClick(event: any) {
        if (main.current && event.target == main.current) {
            const clickEvent = new CustomEvent('clicked_outside')
            window.dispatchEvent(clickEvent)
        }
    }

    return (
        <div ref={main} className={_class} onClick={handleClick}>{children}</div>
    )
}