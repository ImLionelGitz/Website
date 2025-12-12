import style from './index.module.scss'

interface DropDown {
   label: string
   options: dropdownOption[]
   display: string
   placeholder: string
   onChange: (option: string) => void
}

export default function Dropdown(props: DropDown) {
   const { label, options, display, placeholder, onChange } = props

   return (
      <div className={style.dropDown}>
         {label && <label htmlFor={label}>{label}</label>}

         <div className={style.daSelector}>
            <select
               id={label}
               value={display}
               onChange={(e) => onChange(e.target.value)}
            >
               {placeholder && (
                  <option value="" disabled>
                     {placeholder}
                  </option>
               )}

               {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                     {opt.label}
                  </option>
               ))}
            </select>
         </div>
      </div>
   )
}
