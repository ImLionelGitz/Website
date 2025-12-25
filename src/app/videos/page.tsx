'use client'

import Filter from '@/components/universal/high_levels/Filter'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import VideoCard from '@/components/videos/VideoCard'
import style from '../apps/page.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { getWebData } from '@/helpers/funcs'
import { Pages } from '@/helpers/enums'

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

         <section className={style.AppsSection}>
            <Filter
               filters={options}
               curFilter={filterBy}
               itemFilter={(category, filter) => {
                  setFilter((prev) => {
                     const newTable = { ...prev } as Record<string, string>
                     newTable[category] = filter

                     return newTable as Filters
                  })
               }}
            />

            <div style={{ width: '800px', minHeight: '420px' }}>
               <h1 className="mb-3">My Best Videos</h1>

               <div className={style.CardHolder}>
                  {filtered.map((video) => (
                     <VideoCard
                        key={video.urlID}
                        videoID={video.urlID}
                        title={video.title}
                        uploadDate={video.uploadDate}
                     />
                  ))}
               </div>
            </div>
         </section>

         <Footer />
      </main>
   )
}
