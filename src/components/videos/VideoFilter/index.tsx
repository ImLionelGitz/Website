'use client'

import Dropdown from '@/components/universal/low_levels/Dropdown'

export default function VideoFilter() {
   const options = [
      { value: 'starwars', label: 'Star Wars' },
      { value: 'marvel', label: 'Marvel' },
      { value: 'dc', label: 'DC' },
      { value: 'lotr', label: 'Lord of the Rings' },
   ]

   const filters = ['Content', 'Genre']

   return (
      <div>
         {filters.map((filter, i) => (
            <Dropdown
               key={i}
               label={filter}
               options={options}
               display={''}
               onChange={() => {}}
               placeholder={`Choose ${filter}`}
            />
         ))}
      </div>
   )
}
