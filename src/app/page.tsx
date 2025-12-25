'use client'

import WorksCard from '@/components/homepage/WorksCard'
import Footer from '@/components/universal/high_levels/Footer'
import Button from '@/components/universal/low_levels/Button'

import CardStack from '@/components/homepage/CardStack'
import NewsCard from '@/components/homepage/NewsCard'
import ReviewGallery from '@/components/homepage/ReviewGallery'
import style from './page.module.scss'
import Header from '@/components/universal/high_levels/Header'
import { useEffect, useState } from 'react'

export default function Home() {
   const [pageData, setData] = useState<Home | null>(null)

   useEffect(() => {
      async function fetchData() {
         const resp = await fetch('/Test2.json')

         if (resp.ok) {
            const data = await resp.json()
            setData(data.home)
         }
      }

      fetchData()
   }, [])

   return (
      <main>
         <Header imageUrl="/castle.png" text="lololololol" />

         <section className={style.WorksSection}>
            <div className={style.Text}>
               <h1>Our</h1>
               <h2>Works</h2>

               <Button text="Visit Portfolio" href="/portfolio" />
            </div>

            <CardStack>
               <WorksCard
                  icon={'/castle.png'}
                  title={'Videos'}
                  info={'llololol'}
                  url="/portfolio"
               />

               <WorksCard
                  icon={'/castle.png'}
                  title={'Videos'}
                  info={'llololol'}
                  url="/portfolio"
               />

               <WorksCard
                  icon={'/castle.png'}
                  title={'Videos'}
                  info={'llololol'}
                  url="/portfolio"
               />
            </CardStack>
         </section>

         <section className={style.NewsSection}>
            <h1 className="mb-5">Announcements</h1>

            <div className="d-flex">
               {pageData &&
                  pageData.news.map((news, i) => (
                     <NewsCard
                        title={news.title}
                        firstline={news.summry}
                        writer={news.author}
                        uploadDate={news.uploadDate}
                        link={news.link}
                        key={i}
                     />
                  ))}
            </div>
         </section>

         <section className="d-flex justify-content-center">
            <ReviewGallery reviews={pageData ? pageData.reviews : []} />
         </section>

         <Footer />
      </main>
   )
}
