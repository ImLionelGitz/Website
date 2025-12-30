'use client'

import Filter from '@/components/universal/high_levels/Filter'
import { ReactNode, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import style from './index.module.scss'

interface FilterSection {
   title: string
   options: Record<string, dropdownOption[]>
   curFilt: Record<string, string>
   onFilter: (category: string, filter: string) => void
   children: ReactNode[]
}

export default function FilterSection(props: FilterSection) {
   const { options, curFilt, children, title, onFilter } = props
   const [showFilter, slideOutFilter] = useState(false)

   return (
      <section className={style.AppsSection}>
         {showFilter && (
            <div
               onClick={() => slideOutFilter(false)}
               className={style.Backdrop}
            ></div>
         )}

         <div className={`${style.FilterDown} ${!showFilter && style.goDown}`}>
            <Filter
               filters={options}
               curFilter={curFilt}
               itemFilter={onFilter}
            />
         </div>

         <div className={style.OuterHolder}>
            <button
               onClick={() => slideOutFilter(true)}
               className={style.FilterBtn}
            >
               <FaFilter />
            </button>

            <h1 className="mb-3">{title}</h1>

            <div className={style.CardHolder}>{children}</div>
         </div>
      </section>
   )
}
