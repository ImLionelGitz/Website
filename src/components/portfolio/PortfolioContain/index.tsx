'use client'

import { Pages } from '@/helpers/enums'
import { getWebData } from '@/helpers/funcs'
import { useEffect, useMemo, useRef, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import PortfolioCard from '../PortfolioCard'
import style from './index.module.scss'

interface PFContain {
   cardData: iconData
   onExit: () => void
}

export default function PortfolioContain({ cardData, onExit }: PFContain) {
   const [portfolios, setData] = useState<Portfolios | null>(null)
   const [curCard, setCurCard] = useState('')
   const cardFlipped = useRef(false)

   const cards = useMemo(() => {
      if (!portfolios) return []

      const contents = portfolios[cardData.btnType][cardData.btnName].content

      if (typeof contents === 'string') return []
      else return contents
   }, [portfolios, cardData])

   useEffect(() => {
      async function fetchData() {
         const resp = await getWebData(Pages.PORTFOLIO)
         setData(resp)
      }

      fetchData()
   }, [])

   return (
      <div
         onClick={() => {
            if (cardFlipped && curCard) {
               setCurCard('')
            }
         }}
         className="d-flex flex-wrap justify-content-center position-absolute h-100 w-100"
      >
         <div className={style.Blackscreen}></div>

         <button onClick={onExit} className={style.Close}>
            <IoMdCloseCircle />
         </button>

         <div className={style.PortfolioContain}>
            {cards.map((card, i) => (
               <PortfolioCard
                  key={i}
                  guyName={cardData.btnName}
                  views={card.views}
                  content={card.url}
                  isVideo={card.isVideo}
                  price={card.price}
                  platforms={card.platforms}
                  remarks={card.remarks}
                  flip={curCard === card.url}
                  setFlip={() => {
                     setCurCard(card.url)
                     cardFlipped.current = true
                  }}
               />
            ))}
         </div>
      </div>
   )
}
