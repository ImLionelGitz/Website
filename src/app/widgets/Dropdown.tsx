import { useRef } from 'react'
import { DOWN_SYMBOL, UP_SYMBOL } from '../helpers/variables'

/**
 * Create a dropdown.
 * @param label A label for this dropdown (displayed on top left) 
 * @param msg A message shown on this dropdown (e.g. **Pick A Game**)
 * @param options Options of this dropdown's menu
 * @emits CustomEvent called `option_picked` with an ID
 */

export default function Dropdown({ label, msg, options }: LDropdown) {
    const container = useRef(null)
    const caret = useRef(null)
    const viewer = useRef(null)
    const btnHt = 48
    let DrpdnOpen = false

    function OnDropdownClick() {
        const elem = container.current as unknown as HTMLElement
        const elem2 = caret.current as unknown as HTMLElement
        
        if (!DrpdnOpen) {
            const absHT = btnHt * elem.children.length + 'px'
            elem.style.height = absHT
            elem2.innerText = UP_SYMBOL
            DrpdnOpen = true
        }

        else {
            elem.style.removeProperty('height')
            elem2.innerText = DOWN_SYMBOL
            DrpdnOpen = false
        }
    }

    function OnMenuClick(e: any) {
        const elem = viewer.current as unknown as HTMLElement
        const btn = e.target as HTMLButtonElement
        const optionEvent = new CustomEvent('option_picked', { detail: btn.id })

        elem.innerText = btn.innerText
        OnDropdownClick()
        window.dispatchEvent(optionEvent)
    }

    function OnOutsideClick() {
        if (DrpdnOpen) OnDropdownClick()
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('clicked_outside', OnOutsideClick)
    }

    return (
        <div className="Dropdown">
            <div className="button" onClick={OnDropdownClick}>
                <div className="viewer" ref={viewer}>{msg}</div>
                <span ref={caret}>{DOWN_SYMBOL}</span>
            </div>
            <div ref={container} className="container">
                <button style={{pointerEvents: 'none'}} className=' text-gray-500 border-b-2 mx-3 border-gray-400'>{msg}</button>
                {
                    options.map((option, index) => <button onClick={OnMenuClick}
                    key={index} id={option.toLowerCase().split(' ').join('_')}>{option}</button>)
                }
            </div>
            <label>{label}</label>
        </div>
    )
}