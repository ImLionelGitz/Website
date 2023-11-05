import { useRef } from 'react'

/**
 * Creates a main holder for a page
 * @emits CustomEvent called `clicked_outside`
 */

export default function Main({ children, className }: LMain) {
    return (
        <div className={((className) ? className : '')}>{children}</div>
    )
}