import { MdVideoLibrary } from 'react-icons/md'
import style from './index.module.scss'
import { FaImages } from 'react-icons/fa'
import { useState } from 'react'

export default function PortfolioCard() {
   const [test, set] = useState('')

   return (
      <div
         onClick={() => set(style.active)}
         className={`${style.PortfolioCard} ${style.flipped} ${test}`}
      >
         <div className={style.PortfolioFront}>
            <div className="d-flex justify-content-between align-items-center position-relative">
               <h1 className={`${style.Header} ${style.highlight}`}>Brookie</h1>
               <p className={`${style.Views} ${style.highlight}`}>
                  222,000 views
               </p>
            </div>

            <div className={style.Display}>
               {/* <img src="/castle.png" alt="" className="w-100" /> */}
               <iframe src="https://www.youtube.com/embed/1WF1Dx_OBYs?controls=0"></iframe>
            </div>

            <div className={style.PriceSection}>
               <h1 className={style.highlight}>Price</h1>
               <p className={`${style.Price} ${style.highlight}`}>$2000</p>
            </div>

            <div>
               <div className={style.DesBox}>
                  <h1 className={style.InnerTxt}>Remarks</h1>

                  <p>The quick brown fox jumps over the lazy dog</p>
               </div>
            </div>
         </div>

         <div className={style.PortfolioBack}>
            <img src="/silverLiger.png" alt="" />

            <FaImages style={{ filter: 'drop-shadow(1px 4px 6px black)' }} />
         </div>
      </div>
   )
}
