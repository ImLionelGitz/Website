import Filter from '@/components/universal/high_levels/Filter'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import VideoCard from '@/components/videos/VideoCard'
import style from '../apps/page.module.scss'

export default function Apps() {
   const options = [
      { value: 'starwars', label: 'Star Wars' },
      { value: 'marvel', label: 'Marvel' },
      { value: 'dc', label: 'DC' },
      { value: 'lotr', label: 'Lord of the Rings' },
   ]

   const filters = {
      Category: options,
      Genre: options,
   }

   return (
      <main>
         <Header
            imageUrl={'/test2.png'}
            text="This method returns an array of the object's keys, which you can then iterate over to access the corresponding values"
         />

         <section className={style.AppsSection}>
            <Filter filters={filters} />

            <div style={{ maxWidth: '800px' }}>
               <h1 className="mb-3">My Best Videos</h1>

               <div className={style.CardHolder}>
                  <VideoCard />
                  <VideoCard />
               </div>
            </div>
         </section>

         <Footer />
      </main>
   )
}
