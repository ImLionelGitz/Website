import { useEffect, useRef } from 'react'
import style from './index.module.scss'

interface PortfolioFrame {
   iframeCMD: string
   enabled: boolean
}

export default function PortfolioFrame({ iframeCMD, enabled }: PortfolioFrame) {
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
         className={`${style.PortfolioFrame} ${!enabled && style.Disable}`}
         ref={iframe}
         src="html5/bin/index.html"
      ></iframe>
   )
}
