import { useEffect, useRef } from 'react'

interface PortfolioFrame {
   iframeCMD: string
}

export default function PortfolioFrame({ iframeCMD }: PortfolioFrame) {
   const iframe = useRef<HTMLIFrameElement>(null)

   useEffect(() => {
      if (iframeCMD) {
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
