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
import { getWebData } from '@/helpers/funcs'
import { Pages } from '@/helpers/enums'
import { useView } from '@/helpers/useView'

interface Home {
   reviews: review[]
   news: news[]
}

type news = {
   title: string
   summry: string
   author: string
   uploadDate: string
   link: string
}

export default function Home() {
   const [pageData, setData] = useState<Home | null>(null)
   const [worksRef, workVisible] = useView()
   const [newsRef, newsVisible] = useView()

   useEffect(() => {
      async function fetchData() {
         const resp = await getWebData(Pages.HOME)
         setData(resp)
      }

      fetchData()
   }, [])

   return (
      <main>
         <Header imageUrl="/castle.png" text="lololololol" />

         <section className={style.WorksSection}>
            <div
               ref={worksRef}
               className={`${style.Text} not-loaded ${workVisible ? 'loaded' : ''}`}
            >
               <h1>Our</h1>
               <h2>Works</h2>

               <Button text="Visit Portfolio" href="/portfolio" />
            </div>

            <CardStack>
               <WorksCard
                  icon={'/castle.png'}
                  title={'Medias'}
                  info={'llololol'}
                  url="/portfolio?page=1"
               />

               <WorksCard
                  icon={'/castle.png'}
                  title={'Models'}
                  info={'llololol'}
                  url="/portfolio?page=2"
               />

               <WorksCard
                  icon={'/castle.png'}
                  title={'Codes'}
                  info={'llololol'}
                  url="/portfolio?page=3"
               />
            </CardStack>
         </section>

         <section
            ref={newsRef}
            className={`${style.NewsSection} not-loaded ${newsVisible ? 'loaded' : ''}`}
         >
            <h1 className="mb-3">Announcements</h1>

            <div className={style.NewsCards}>
               {pageData?.news.map((news, i) => (
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

         <section className={style.Reviews}>
            <ReviewGallery reviews={pageData ? pageData.reviews : []} />
         </section>

         <Footer />
      </main>
   )
}
