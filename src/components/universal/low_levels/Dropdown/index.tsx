import style from './index.module.scss'

interface DropDown {
   label: string
   options: dropdownOption[]
   display: string
   onChange: (option: string) => void
}

export default function Dropdown(props: DropDown) {
   const { label, options, display, onChange } = props

   return (
      <div className={style.dropDown}>
         {label && <label htmlFor={label}>{label}</label>}

         <div className={style.daSelector}>
            <select
               id={label}
               value={display}
               onChange={(e) => onChange(e.target.value)}
            >
               <option value="all">All</option>

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
