'use client'

import PortfolioBtn from '@/components/portfolio/PortfolioBtn'
import PortfolioFrame from '@/components/portfolio/PortfolioFrame'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import { Messages } from '@/helpers/enums'
import { useEffect, useState } from 'react'
import style from './page.module.scss'
import PortfolioContain from '@/components/portfolio/PortfolioContain'

export default function Portfolio() {
   const [visible, setVisible] = useState(false)
   const [message, setMessage] = useState('')
   const [iconData, setData] = useState<iconData | null>(null)

   useEffect(() => {
      const onMessage = (e: MessageEvent) => {
         switch (e.data) {
            case Messages.SLIDER_INCOMING:
               setVisible(false)
               break

            case Messages.SLIDER_OUTGOING:
               setVisible(true)
               setMessage('')
               break

            default:
               const lol: BtnCall = JSON.parse(e.data)

               if (lol.action === Messages.BTN_INTERACT) {
                  setData(lol.data)
               }

               break
         }
      }

      window.addEventListener('message', onMessage)

      return () => window.removeEventListener('message', onMessage)
   }, [])

   return (
      <main>
         <Header imageUrl="" text="" />

         <section id="jamal" className={style.PortfolioSection}>
            <PortfolioFrame enabled={visible} iframeCMD={message} />

            <div className={`${style.Controls} ${visible && style.active}`}>
               <PortfolioBtn
                  icon="Media"
                  onClick={() => setMessage(Messages.SHOW_THUMBS)}
               />

               <PortfolioBtn
                  icon="Model"
                  onClick={() => setMessage(Messages.SHOW_MODELS)}
               />

               <PortfolioBtn
                  icon="Code"
                  onClick={() => setMessage(Messages.SHOW_CODES)}
               />
            </div>

            {iconData && (
               <PortfolioContain
                  cardData={iconData}
                  onExit={() => setData(null)}
               />
            )}
         </section>

         <Footer />
      </main>
   )
}
