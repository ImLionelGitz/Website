'use client'

import style from './index.module.scss'
import Dropdown from '@/components/universal/low_levels/Dropdown'
import { Stack } from 'react-bootstrap'

interface FilterType {
   filters: Record<string, dropdownOption[]>
}

export default function Filter(props: FilterType) {
   const { filters } = props

   return (
      <Stack direction="vertical" className={style.Filter}>
         {Object.keys(filters).map((key, i) => (
            <Dropdown
               key={i}
               label={key}
               options={filters[key]}
               display={''}
               onChange={() => {}}
            />
         ))}
      </Stack>
   )
}
