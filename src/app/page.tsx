import HomeBar from '@/components/universal/HomeBar'
import NavBar from '@/components/universal/NavBar'
import WorksCard from '@/components/homepage/WorksCard'
import Button from '@/components/universal/Button'
import Banner from '@/components/universal/Banner'
import Gallery from '@/components/homepage/ReviewGallery'
import Footer from '@/components/universal/Footer'

import style from './page.module.scss'
import CardStack from '@/components/homepage/CardStack'
import NewsCard from '@/components/homepage/NewsCard'
import ReviewGallery from '@/components/homepage/ReviewGallery'

const data: review[] = [
   {
      name: 'lol',
      comments: 'The quick brown fox jumps over the lazy dog',
      pfp: '/pfp1.jpg',
      ratings: 0,
   },

   {
      name: 'Goku',
      comments: 'The quick brown fox jumps over the lazy dog',
      pfp: '/pfp2.jpg',
      ratings: 4,
   },

   {
      name: 'Jamal',
      comments: 'The quick brown fox jumps over the lazy dog',
      pfp: '/castle.png',
      ratings: 2,
   },
]

export default function Home() {
   return (
      <main>
         <section>
            <HomeBar />

            <div className={style.Banner}>
               <Banner image="/castle.png" content="lololololol" />
            </div>

            <NavBar />
         </section>

         <section className={style.WorksSection}>
            <div className={style.Text}>
               <h1>Our</h1>
               <h2>Works</h2>

               <Button text="Visit Portfolio" />
            </div>

            <CardStack>
               <WorksCard
                  icon={'/castle.png'}
                  title={'Videos'}
                  info={'llololol'}
               />

               <WorksCard
                  icon={'/castle.png'}
                  title={'Thumbnail'}
                  info={'llololol'}
               />

               <WorksCard
                  icon={'/castle.png'}
                  title={'Models'}
                  info={'llololol'}
               />
            </CardStack>
         </section>

         <section className={style.NewsSection}>
            <h1 className="mb-5">Announcements</h1>

            <div className="d-flex">
               <NewsCard
                  title={'Buu Died'}
                  firstline={'kokokokkokokoko'}
                  writer={'Goku'}
                  uploadDate={'12/02/2000'}
                  link={'#'}
               />

               <NewsCard
                  title={'Buu Died'}
                  firstline={'kokokokkokokoko'}
                  writer={'Goku'}
                  uploadDate={'12/02/2000'}
                  link={'#'}
               />

               <NewsCard
                  title={'Buu Died'}
                  firstline={'kokokokkokokoko'}
                  writer={'Goku'}
                  uploadDate={'12/02/2000'}
                  link={'#'}
               />
            </div>
         </section>

         <section className="d-flex justify-content-center">
            <ReviewGallery reviews={data} />
         </section>

         <Footer />
      </main>
   )
}
