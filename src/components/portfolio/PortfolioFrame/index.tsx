import { Messages } from '@/helpers/enums'
import { useEffect, useRef, useState } from 'react'

interface PortfolioFrame {
   iframeCMD?: string
}

function ripThumbnails(rawData: Record<string, pfNextSlot>) {
   const slots = Object.keys(rawData).flatMap((s) => {
      if (typeof rawData[s].content !== 'string') {
         return rawData[s].content
      } else return []
   })

   const urls = slots.filter((s) => !s.isVideo).map((d) => d.url)
   const elemCount = urls.length > 5 ? 5 : urls.length
   const pickeds: string[] = []

   for (let i = 0; i < elemCount; i++) {
      const randomIndex = Math.floor(Math.random() * urls.length)
      const elem = urls[randomIndex]

      if (elem) {
         pickeds.push(elem)
         urls.splice(randomIndex, 1)
         continue
      }

      break
   }

   return pickeds
}

function convertToHaxe(data: Portfolios) {
   const haxeData: PortfoliosHaxe = {
      media: Object.entries(data.media).map(([key, val]) => {
         const daSlot: pfHaxeSlot = {
            imgUrl: val.icon,
            name: key,
            url: '',
         }

         return daSlot
      }),

      apps: Object.entries(data.apps).map(([key, val]) => {
         const daSlot: pfHaxeSlot = {
            imgUrl: val.icon,
            name: key,
            url: '',
         }

         return daSlot
      }),

      models: Object.entries(data.models).map(([key, val]) => {
         const url = typeof val.content === 'string' ? val.content : '#'

         const daSlot: pfHaxeSlot = {
            imgUrl: val.icon,
            name: key,
            url: url,
         }

         return daSlot
      }),

      parallax: ripThumbnails(data.media),
   }

   const dataToGo: HaxeData = {
      action: Messages.DATA_SENT,
      data: haxeData,
   }

   return dataToGo
}

export default function PortfolioFrame({ iframeCMD }: PortfolioFrame) {
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
      const onLoad = (e: MessageEvent) => {
         const elem = iframe.current

         if (elem && elem.contentWindow && e.data === Messages.HAXE_READY) {
            const dataToGo = convertToHaxe(data)
            elem.contentWindow.postMessage(JSON.stringify(dataToGo))
         }
      }

      window.addEventListener('message', onLoad)

      return () => window.removeEventListener('message', onLoad)
   }, [data])

   useEffect(() => {
      if (iframeCMD !== '') {
         const elem = iframe.current

         if (elem && elem.contentWindow) {
            elem.contentWindow.postMessage(iframeCMD)
         }
      }
   }, [iframeCMD])

   return (
      <iframe
         style={{ width: '100%', height: '100vh' }}
         ref={iframe}
         src="html5/bin/index.html"
      ></iframe>
   )
}
