/**
 * Create an input element that is either Toggle Buttons, Radio Buttons, Checkboxes and Text Inputs (2 versions). **Ignore the children param!**
 * @param type The type of input (Limited to `TOGGLE`, `CHECKBOX` and `RADIO`. To use Text, keep this param blank)
 * @param alt_text Use the second version of text input (**Only works if the input type is text!**)
 * @param width Width of the text input (default 100)
 * @param height Height of the text input (default 20)
 * @param onchange A callback if text change is detected
 */

export default function Input({ children, type, alt_text, width, height, onchange }: LInput) {
    function onCheck(e: any) {
        const value = e.target as HTMLInputElement
        const checkFire = new CustomEvent('on_check', { detail: { source: children, value: value.checked } })
        dispatchEvent(checkFire)
    }

    if (type == 'CHECKBOX' || type == 'RADIO' || type == 'TOGGLE') {
        const chosenInpType = type.toLowerCase()

        const inpType = (type == 'TOGGLE') ? 'checkbox' : chosenInpType
        const inpLabel = (type == 'TOGGLE') ? '' : children
        const inpStyle = (type == 'CHECKBOX') ? 'CheckBox' : (type == 'TOGGLE') ? 'ToggleBox' : 'RadioBox'
        const toggleInnerContent = (type == 'TOGGLE') ? children : ''

        return (
            <label className={inpStyle}>
                {inpLabel}
                <input type={inpType} onClick={onCheck} />
                <span className={chosenInpType}>{toggleInnerContent}</span>
            </label>
        )
    }

    const absWidth = (width && width > 0) ? width : 100
    const absHeight = (height && height > 0) ? height : 20
    const altInput = "border-2 p-2 outline-none rounded border-white bg-transparent"

    if (alt_text) return (
        <input className={altInput} type="text" placeholder={children}
            style={{ width: absWidth + 'px', height: absHeight + 'px' }} onChange={onchange} />
    )

    return (
        <textarea className="TextInput" placeholder={children}
            cols={30} rows={10} style={{ width: absWidth + 'px', height: absHeight + 'px' }}></textarea>
    )
}