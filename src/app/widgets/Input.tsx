export default function Input({ children, type, onchange, className }: LInput) {
    if (['CHECKBOX', 'RADIO', 'TOGGLE'].includes(type)) {
        const chosenInpType = type.toLowerCase()

        const inpType = (type == 'TOGGLE') ? 'checkbox' : chosenInpType
        const inpLabel = (type == 'TOGGLE') ? '' : children
        const inpStyle = (type == 'CHECKBOX') ? 'CheckBox' : (type == 'TOGGLE') ? 'ToggleBox' : 'RadioBox'
        const toggleInnerContent = (type == 'TOGGLE') ? children : ''

        return (
            <label className={inpStyle + ' ' + ((className) ? className : '')}>
                {inpLabel}
                <input type={inpType} onClick={(e) => onchange({
                    source: inpLabel.toLowerCase(),
                    box: e.target,
                    value: (e.target as HTMLInputElement).checked
                })} />
                <span className={chosenInpType}>{toggleInnerContent}</span>
            </label>
        )
    }
}