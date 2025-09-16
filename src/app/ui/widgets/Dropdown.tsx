import uis from '@/app/styles/components/ui.module.scss'


export default function DropDown({label, options, value, onChange, placeholder}: any) {
    return (
        <div className={uis.dropDown}>
            {label && <label htmlFor={label}>{label}</label>}
            <div className={uis.dropDownSelector}>
                <select
                    id={label}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((opt: any) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}