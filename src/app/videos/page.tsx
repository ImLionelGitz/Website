'use client'

import FilterSection from '@/components/universal/high_levels/FilterSect'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import VideoCard from '@/components/videos/VideoCard'
import { Pages } from '@/helpers/enums'
import { getWebData } from '@/helpers/funcs'
import { useEffect, useMemo, useState } from 'react'

interface Video {
   urlID: string
   title: string
   uploadDate: string
   category: string
   genre: string
}

type FilterOptions = {
   Category: dropdownOption[]
   Genre: dropdownOption[]
}

type Filters = {
   Category: string
   Genre: string
}

const all = 'all'

export default function Videos() {
   const [apps, setApps] = useState<Video[] | null>(null)
   const [filterBy, setFilter] = useState<Filters>({
      Category: all,
      Genre: all,
   })

   const filtered = useMemo(() => {
      if (!apps) return []

      return apps.filter(
         (app) =>
            (filterBy.Category === all || app.category === filterBy.Category) &&
            (filterBy.Genre === all || app.genre === filterBy.Genre)
      )
   }, [apps, filterBy])

   const options = useMemo<FilterOptions>(() => {
      if (!apps) {
         return {
            Category: [],
            Genre: [],
         }
      }

      const unique = <T,>(values: T[]) => Array.from(new Set(values))

      return {
         Category: unique(apps.map((a) => a.category)).map((v) => ({
            value: v,
            label: v,
         })),
         Genre: unique(apps.map((a) => a.genre)).map((v) => ({
            value: v,
            label: v,
         })),
      }
   }, [apps])

   useEffect(() => {
      async function fetchData() {
         const resp = await getWebData(Pages.VIDEOS)
         setApps(resp)
      }

      fetchData()
   }, [])

   return (
      <main>
         <Header imageUrl={'/test.jpg'} text="ha ha ha ha ha" />

         <FilterSection
            title={'My Best Videos'}
            options={options}
            curFilt={filterBy}
            onFilter={(category: string, filter: string) => {
               setFilter((prev) => {
                  const newTable = { ...prev } as Record<string, string>
                  newTable[category] = filter

                  return newTable as Filters
               })
            }}
         >
            {filtered.map((video) => (
               <VideoCard
                  key={video.urlID}
                  videoID={video.urlID}
                  title={video.title}
                  uploadDate={video.uploadDate}
               />
            ))}
         </FilterSection>

         <Footer />
      </main>
   )
}
