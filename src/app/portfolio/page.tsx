'use client'

import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import { useEffect, useState } from 'react'
import { Messages } from '@/helpers/enums'
import PortfolioFrame from '@/components/portfolio/PortfolioFrame'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import { Col, Container, Row } from 'react-bootstrap'
import PortfolioContain from '@/components/portfolio/PortfolioContain'
import PortfolioBtn from '@/components/portfolio/PortfolioBtn'

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

         <section>
            <PortfolioBtn />

            {/* <div>
               {visible && (
                  <button onClick={() => setMessage(Messages.SHOW_CODES)}>
                     apps
                  </button>
               )}

               {visible && (
                  <button onClick={() => setMessage(Messages.SHOW_THUMBS)}>
                     media
                  </button>
               )}

               {visible && (
                  <button onClick={() => setMessage(Messages.SHOW_MODELS)}>
                     models
                  </button>
               )}
            </div> */}
         </section>

         <Footer />
      </main>
   )
}
