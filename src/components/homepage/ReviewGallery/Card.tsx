import LazyImage from '@/components/universal/low_levels/LazyImage'
import { Star } from 'lucide-react'
import { FaQuoteLeft } from 'react-icons/fa'
import style from './index.module.scss'

interface Card {
   title: string
   content: string
   stars: number
   image: string
}

export default function Card({ title, content, stars, image }: Card) {
   const array = new Array(5).fill(0)

   return (
      <div className={style.card}>
         <div style={{ width: '70px', height: '70px' }}>
            <LazyImage
               src={image}
               alt="Icon"
               width={88}
               height={88}
               className="rounded-circle mb-2"
            />
         </div>

         <FaQuoteLeft className={style.Quote} />

         <h2>{title}</h2>

         <p>
            <q>
               <i>{content}</i>
            </q>
         </p>

         <div>
            {array.map((_, index) => (
               <Star
                  key={index}
                  className="mx-1"
                  fill={index < stars ? '#ebde34' : 'none'}
               />
            ))}
         </div>
      </div>
   )
}
