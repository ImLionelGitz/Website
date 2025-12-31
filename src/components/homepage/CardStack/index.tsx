import { Children, ReactNode, useState } from 'react'
import style from './index.module.scss'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
import { useView } from '@/helpers/useView'

interface CardStack {
   children: ReactNode[]
}

function rand(max: number, min: number) {
   return +(min + (max - min) * Math.random()).toFixed(2)
}

export default function CardStack({ children }: CardStack) {
   const [cardIndex, setCardIndex] = useState(0)
   const [worksRef, workVisible] = useView()
   const maxCards = Children.count(children)
   const maxdeg = 15

   function handleNext() {
      setCardIndex((i) => Math.min(maxCards, i + 1) % maxCards)
   }

   function handlePrev() {
      setCardIndex((i) => (((i - 1) % maxCards) + maxCards) % maxCards)
   }

   return (
      <div
         ref={worksRef}
         className={`${style.CardScoller} not-loaded ${workVisible ? 'loaded' : ''}`}
      >
         <div
            style={{ '--n': maxCards, '--k': cardIndex } as CSSVars}
            className={style.CardStack}
         >
            {Children.map(children, (card, i) => (
               <div
                  key={i}
                  style={
                     {
                        '--i': i,
                        '--a': `${rand(maxdeg, -1 * maxdeg)}deg`,
                        pointerEvents: cardIndex === i ? 'all' : 'none',
                     } as CSSVars
                  }
                  className={style.CardHolder}
               >
                  <div className={style.Inner}>{card}</div>
               </div>
            ))}
         </div>

         <div className={style.Controls}>
            <button onClick={() => handlePrev()}>
               <TiChevronLeft />
            </button>

            <button onClick={() => handleNext()}>
               <TiChevronRight />
            </button>
         </div>
      </div>
   )
}
