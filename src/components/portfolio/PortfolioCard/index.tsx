/* eslint-disable @next/next/no-img-element */

import { MdVideoLibrary } from 'react-icons/md'
import { FaImages } from 'react-icons/fa'
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

   return (
      <div
         onClick={() => setFlip()}
         className={`${style.PortfolioCard} ${style.flipped} ${flip ? style.active : ''}`}
      >
         <div className={style.PortfolioFront}>
            <div className="d-flex justify-content-between align-items-center position-relative">
               <h1 className={`${style.Header} ${style.highlight}`}>
                  {guyName}
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
                     src={`https://www.youtube.com/embed/${content}?controls=0`}
                  ></iframe>
               ) : (
                  <img src={content} alt="" className="w-100" />
               )}
            </div>

            <div className={style.PriceSection}>
               <h1 className={style.highlight + (platforms && ' mb-0')}>
                  {price ? 'Price' : 'Platform'}
               </h1>

               {platforms && (
                  <div className={style.Platforms}>
                     <img src="/unity.png" alt="" />
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
                  style={{ filter: 'drop-shadow(1px 4px 6px black)' }}
               />
            ) : (
               <FaImages style={{ filter: 'drop-shadow(1px 4px 6px black)' }} />
            )}
         </div>
      </div>
   )
}
