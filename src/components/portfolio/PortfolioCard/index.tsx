/* eslint-disable @next/next/no-img-element */

import { MyCodebase } from '@/helpers/enums'
import { useEffect, useRef, useState } from 'react'
import { FaImages } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'
import DaCode from './codesUsed'
import style from './index.module.scss'

interface PortfolioCard {
   guyName: string
   views: number
   content: string
   isVideo: boolean
   price?: number
   platforms?: number[]
   remarks: string
   flip: boolean
   setFlip: () => void
}

export default function PortfolioCard(props: PortfolioCard) {
   const cardRef = useRef<HTMLDivElement>(null)
   const [isVisible, setVisible] = useState(false)
   const {
      guyName,
      views,
      content,
      isVideo,
      price,
      platforms,
      remarks,
      flip,
      setFlip,
   } = props

   useEffect(() => {
      const el = cardRef.current
      if (!el) return

      if (!flip) {
         el.style.setProperty('--tx', '0px')
         el.style.setProperty('--ty', '0px')
         return
      }

      const rect = el.getBoundingClientRect()

      const viewportX = window.innerWidth / 2
      const viewportY = window.innerHeight / 2

      const cardX = rect.left + rect.width / 2
      const cardY = rect.top + rect.height / 2

      const dx = viewportX - cardX
      const dy = viewportY - cardY

      el.style.setProperty('--tx', `${dx}px`)
      el.style.setProperty('--ty', `${dy}px`)
   }, [flip])

   function onLoad() {
      setTimeout(() => {
         setVisible(true)
      }, Math.random() * 1000)
   }

   function assignDef(p: string) {
      const process = p.toUpperCase() as unknown as MyCodebase
      const index = MyCodebase[process]

      if (typeof index === 'number') {
         return <DaCode codeType={index} />
      }

      throw new Error(`${p} doesn't exist in accepted codebase!`)
   }

   return (
      <div
         onClick={() => setFlip()}
         className={`${style.PortfolioCard} not-loaded ${isVisible ? 'loaded' : ''}`}
      >
         <div
            ref={cardRef}
            className={`${style.MainContent} ${style.flipped} ${flip ? style.active : ''}`}
         >
            <div className={style.PortfolioFront}>
               <div className="d-flex justify-content-between align-items-center position-relative">
                  <h1 className={`${style.Header} ${style.highlight}`}>
                     {guyName.replace(/_/g, ' ')}
                  </h1>

                  {price && (
                     <p className={`${style.Views} ${style.highlight}`}>
                        {`${views} views`}
                     </p>
                  )}
               </div>

               <div className={style.Display}>
                  {isVideo ? (
                     <iframe
                        onLoad={onLoad}
                        src={`https://www.youtube.com/embed/${content}?controls=0`}
                     ></iframe>
                  ) : (
                     <img onLoad={onLoad} src={content} alt="" />
                  )}
               </div>

               <div className={style.PriceSection}>
                  <h1
                     style={{ marginBottom: '2px' }}
                     className={style.highlight + (platforms ? ' mb-0' : '')}
                  >
                     {price ? 'Price' : 'Used'}
                  </h1>

                  {platforms && (
                     <div className={style.Platforms}>
                        {platforms.map((e, i) => (
                           <DaCode key={i} codeType={e} />
                        ))}

                        {platforms.length <= 0 && assignDef(guyName)}
                     </div>
                  )}

                  {price && (
                     <p
                        className={`${style.Price} ${style.highlight}`}
                     >{`$${price}`}</p>
                  )}
               </div>

               <div className={style.DesBox}>
                  <h1 className={style.InnerTxt}>Remarks</h1>

                  <p>{remarks}</p>
               </div>
            </div>

            <div className={style.PortfolioBack}>
               <img src="/silverLiger2.png" alt="" />

               {isVideo ? (
                  <MdVideoLibrary
                     style={{ filter: 'drop-shadow(black 1px 4px 2px)' }}
                  />
               ) : (
                  <FaImages
                     style={{ filter: 'drop-shadow(black 1px 4px 2px)' }}
                  />
               )}
            </div>
         </div>
      </div>
   )
}
