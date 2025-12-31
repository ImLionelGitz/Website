/* eslint-disable @next/next/no-img-element */

import { Card, CardImg, CardImgOverlay } from 'react-bootstrap'
import style from './index.module.scss'
import { Platforms } from '@/helpers/enums'
import { useState } from 'react'
import { useView } from '@/helpers/useView'

interface AppCard {
   shouldFlip: boolean
   img: string
   name: string
   platforms: Record<string, string>
   onTap: () => void
}

export default function AppCard(props: AppCard) {
   const { shouldFlip, img, name, platforms, onTap } = props
   const [reveal, setShow] = useState(false)
   const [daCard, isVisible] = useView()

   function onLoad() {
      setTimeout(() => {
         setShow(true)
      }, Math.random() * 1000)
   }

   return (
      <div
         ref={daCard}
         className={`${style.AppCard} not-loaded ${reveal && isVisible ? 'loaded' : ''}`}
      >
         <Card
            onClick={onTap}
            style={{ cursor: shouldFlip ? 'auto' : 'pointer' }}
            className={
               !shouldFlip
                  ? style.Container
                  : `${style.Container} ${style.active}`
            }
         >
            <div className={style.CardInner}>
               <div className={style.CardImage}>
                  <img className={style.BG} src={img} alt="" />

                  <CardImg onLoad={onLoad} className={style.Icon} src={img} />
               </div>

               <CardImgOverlay className={style.CardInfo}>
                  <div className={style.Content}>
                     {Object.entries(platforms).map(([prop, val], i) => {
                        let imgPath = ''

                        switch (prop) {
                           case Platforms.ANDROID:
                              imgPath = '/gplay.png'
                              break
                        }

                        return (
                           <a href={val} key={i}>
                              <img src={imgPath} alt="" />
                           </a>
                        )
                     })}
                  </div>
               </CardImgOverlay>
            </div>
         </Card>

         <h2>{name}</h2>
      </div>
   )
}
