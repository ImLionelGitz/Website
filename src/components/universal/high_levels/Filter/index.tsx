'use client'

import style from './index.module.scss'
import Dropdown from '@/components/universal/low_levels/Dropdown'
import { Stack } from 'react-bootstrap'

interface FilterType {
   filters: Record<string, dropdownOption[]>
   curFilter: Record<string, string>
   itemFilter: (category: string, filter: string) => void
}

export default function Filter(props: FilterType) {
   const { filters, curFilter, itemFilter } = props

   return (
      <Stack direction="vertical" className={style.Filter}>
         {Object.keys(filters).map((key, i) => (
            <Dropdown
               key={i}
               label={key}
               options={filters[key]}
               display={curFilter[key]}
               onChange={(e) => itemFilter(key, e)}
            />
         ))}
      </Stack>
   )
}
