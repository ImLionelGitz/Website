'use client'

import { Card, CardImg, CardImgOverlay } from 'react-bootstrap'
import style from './index.module.scss'
import { useState } from 'react'

export default function AppCard() {
   const [flip, setFlip] = useState(false)

   return (
      <div className={style.AppCard}>
         <Card
            onClick={() => setFlip(true)}
            style={{ cursor: flip ? 'auto' : 'pointer' }}
            className={
               !flip ? style.Container : `${style.Container} ${style.active}`
            }
         >
            <div className={style.CardInner}>
               <div className={style.CardImage}>
                  <img className={style.BG} src="/game.jpg" alt="" />
                  <CardImg className={style.Icon} src={'/game.jpg'} />
               </div>

               <CardImgOverlay className={style.CardInfo}>
                  <div className={style.Content}>
                     <a href="#">
                        <img src="/gplay.png" alt="" />
                     </a>
                  </div>
               </CardImgOverlay>
            </div>
         </Card>

         <h2>TimR</h2>
      </div>
   )
}
