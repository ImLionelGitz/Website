'use client'

import PortfolioBtn from '@/components/portfolio/PortfolioBtn'
import PortfolioFrame from '@/components/portfolio/PortfolioFrame'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import { Messages } from '@/helpers/enums'
import { useEffect, useState } from 'react'
import style from './page.module.scss'

export default function Portfolio() {
   const [visible, setVisible] = useState(false)
   const [message, setMessage] = useState('')

   useEffect(() => {
      const onMessage = (e: MessageEvent) => {
         try {
            const lol: BtnCall = JSON.parse(e.data)

            if (lol.action === Messages.BTN_INTERACT) {
               console.log(lol.data)
            }
         } catch (_) {
            switch (e.data) {
               case Messages.SLIDER_INCOMING:
                  setVisible(false)
                  break

               case Messages.SLIDER_OUTGOING:
                  setVisible(true)
                  setMessage('')
                  break

               default:
                  break
            }
         }
      }

      window.addEventListener('message', onMessage)

      return () => window.removeEventListener('message', onMessage)
   }, [])

   return (
      <main>
         <Header imageUrl="" text="" />

         <section className={style.PortfolioSection}>
            <PortfolioFrame iframeCMD={message} />

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
         </section>

         <Footer />
      </main>
   )
}
