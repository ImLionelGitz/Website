'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import style from './index.module.scss'
import Image from 'next/image'

interface Banner {
   image: string
}

export default function Banner({ image }: Banner) {
   const [loaded, setLoaded] = useState(false)
   const onLoad = () => setLoaded(true)

   return (
      <div
         style={{ backgroundImage: `url("${image}")` }}
         className={style.Banner}
      >
         <div className={style.Content}>
            <img className={style.Gradient} src="/Dark.png" alt="" />

            <div className={style.Info}>
               <Link
                  href="/"
                  className={`not-loaded ${loaded ? 'loaded' : ''}`}
               >
                  <Image
                     onLoad={onLoad}
                     src="/logo.webp"
                     alt="Logo"
                     fill
                     sizes="35vw"
                  />
               </Link>
            </div>
         </div>
      </div>
   )
}
