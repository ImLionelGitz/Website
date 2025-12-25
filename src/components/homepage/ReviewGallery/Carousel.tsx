'use client'

import { Children, ReactNode, useState } from 'react'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'
import style from './index.module.scss'

interface Carousel {
   children: ReactNode[]
}

export default function Carousel({ children }: Carousel) {
   const [active, setActive] = useState(0)
   const count = Children.count(children)
   const MAX_VISIBILITY = 3

   return (
      <div className={style.carousel}>
         {/* previous button */}

         {active > 0 && (
            <button
               className={`${style.nav} ${style.left}`}
               onClick={() => setActive((i) => i - 1)}
            >
               <TiChevronLeftOutline />
            </button>
         )}

         {/* all cards */}

         <div className={style.container}>
            {Children.map(children, (child, i) => (
               <div
                  className={style.cardContainer}
                  style={
                     {
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / MAX_VISIBILITY,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / MAX_VISIBILITY,
                        pointerEvents: active === i ? 'auto' : 'none',
                        opacity:
                           Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        display:
                           Math.abs(active - i) > MAX_VISIBILITY
                              ? 'none'
                              : 'flex',
                     } as CSSVars
                  }
               >
                  {child}
               </div>
            ))}
         </div>

         {/* next button */}

         {active < count - 1 && (
            <button
               className={`${style.nav} ${style.right}`}
               onClick={() => setActive((i) => i + 1)}
            >
               <TiChevronRightOutline />
            </button>
         )}
      </div>
   )
}
