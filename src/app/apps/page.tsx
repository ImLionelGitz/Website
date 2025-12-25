'use client'

import AppCard from '@/components/apps/AppCard'
import Filter from '@/components/universal/high_levels/Filter'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import style from './page.module.scss'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getWebData } from '@/helpers/funcs'
import { Pages } from '@/helpers/enums'

type App = {
   name: string
   img: string
   platforms: Record<string, string>
   category: string
   genre: string
   mode: string
}

type FilterOptions = {
   Category: dropdownOption[]
   Genre: dropdownOption[]
   Platform: dropdownOption[]
   Mode: dropdownOption[]
}

type Filters = {
   Category: string
   Genre: string
   Platform: string
   Mode: string
}

const all = 'all'

export default function Apps() {
   const [apps, setApps] = useState<App[] | null>(null)
   const [flippedElem, setFlipped] = useState('')
   const flipBack = useRef(false)

   const [filterBy, setFilter] = useState<Filters>({
      Category: all,
      Genre: all,
      Platform: all,
      Mode: all,
   })

   const filtered = useMemo(() => {
      if (!apps) return []

      return apps.filter(
         (app) =>
            (filterBy.Category === all || app.category === filterBy.Category) &&
            (filterBy.Genre === all || app.genre === filterBy.Genre) &&
            (filterBy.Platform === all || app.platforms[filterBy.Platform]) &&
            (filterBy.Mode === all || app.mode === filterBy.Mode)
      )
   }, [apps, filterBy])

   const options = useMemo<FilterOptions>(() => {
      if (!apps) {
         return {
            Category: [],
            Genre: [],
            Platform: [],
            Mode: [],
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
         Platform: unique(apps.flatMap((a) => Object.keys(a.platforms))).map(
            (v) => ({
               value: v,
               label: v,
            })
         ),
         Mode: unique(apps.map((a) => a.mode)).map((v) => ({
            value: v,
            label: v,
         })),
      }
   }, [apps])

   useEffect(() => {
      async function fetchData() {
         const resp = await getWebData(Pages.APPS)
         setApps(resp)
      }

      fetchData()
   }, [])

   function resetCard() {
      if (flippedElem && flipBack.current) {
         flipBack.current = false
         setFlipped('')
      }
   }

   return (
      <main onClick={resetCard}>
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
               <h1 className="mb-3">My Apps</h1>

               <div className={style.CardHolder}>
                  {filtered.map((app) => (
                     <AppCard
                        key={app.name}
                        shouldFlip={flippedElem === app.name}
                        img={app.img}
                        name={app.name}
                        platforms={app.platforms}
                        onTap={() => {
                           flipBack.current = true
                           setFlipped(app.name)
                        }}
                     />
                  ))}
               </div>
            </div>
         </section>

         <Footer />
      </main>
   )
}
