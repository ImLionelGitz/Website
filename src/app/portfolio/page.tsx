'use client'

import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'
import { useEffect, useRef, useState } from 'react'
import { Messages } from '@/helpers/enums'

function convertToHaxe(data: Portfolios) {
   const haxeData: PortfoliosHaxe = {
      media: Object.entries(data.media).map(([key, val]) => {
         const daSlot: pfHaxeSlot = {
            imgUrl: val[0].imgUrl,
            name: key,
            url: '',
         }

         return daSlot
      }),
      apps: Object.entries(data.apps).map(([key, val]) => {
         const daSlot: pfHaxeSlot = {
            imgUrl: val[0].imgUrl,
            name: key,
            url: '',
         }

         return daSlot
      }),
      models: Object.entries(data.models).map(([key, val]) => {
         const daSlot: pfHaxeSlot = {
            imgUrl: val[0].imgUrl,
            name: key,
            url: val[0].url,
         }

         return daSlot
      }),
   }

   const dataToGo: HaxeData = {
      action: Messages.DATA_SENT,
      data: haxeData,
   }

   return dataToGo
}

export default function Portfolio() {
   const iframe = useRef<HTMLIFrameElement>(null)
   const [data, setData] = useState<Portfolios>({
      media: {},
      models: {},
      apps: {},
   })

   useEffect(() => {
      async function begin() {
         const resp = await fetch('/Test.json')
         const data: Portfolios = await resp.json()

         setData(data)
      }

      begin()
   }, [])

   useEffect(() => {
      const onLoad = function (e: MessageEvent) {
         const elem = iframe.current

         if (elem && elem.contentWindow && e.data === Messages.HAXE_READY) {
            const dataToGo = convertToHaxe(data)
            elem.contentWindow.postMessage(JSON.stringify(dataToGo))
         }
      }

      window.addEventListener('message', onLoad)

      return () => window.removeEventListener('message', onLoad)
   }, [data])

   return (
      <main>
         <Header imageUrl="" text="" />

         <section>
            <iframe ref={iframe} src="html5/bin/index.html"></iframe>

            <div>
               <button>lol</button>
            </div>
         </section>

         <Footer />
      </main>
   )
}
