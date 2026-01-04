import style from './index.module.scss'

interface DropDown {
   label?: string
   options: dropdownOption[]
   display: string
   color?: string
   noAll?: boolean
   onChange: (option: string) => void
}

export default function Dropdown(props: DropDown) {
   const { label, options, display, color, noAll, onChange } = props

   return (
      <div className={style.dropDown}>
         {label && <label htmlFor={label}>{label}</label>}

         <div className={style.daSelector}>
            <select
               id={label}
               value={display ? display : 'specify'}
               onChange={(e) => onChange(e.target.value)}
               style={{ color: color ? color : '#c9c0c0' }}
            >
               {noAll ? (
                  <option disabled value="specify">
                     Specify Category
                  </option>
               ) : (
                  <option value="all">All</option>
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
