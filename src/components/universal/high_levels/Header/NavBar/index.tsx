/* eslint-disable @next/next/no-img-element */
'use client'

import { Box, BoxAlign } from '@/cores/Box'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react/jsx-runtime'
import style from './index.module.scss'

export default function NavBar() {
   const navs = ['Apps', 'Videos', 'Portfolio', 'Contact']
   const path = usePathname()

   return (
      <Box alignment={BoxAlign.CENTER} className={style.Navbar}>
         <div className={style.Bar}></div>
         <img src="/plaque.png" alt="" />

         <div className={style.NavContent}>
            {navs.map((val, index) => (
               <Fragment key={index}>
                  {path.includes(val.toLowerCase()) ? (
                     <span
                        style={{ color: 'var(--theme-color)' }}
                        className="mx-1"
                     >
                        {val.toUpperCase()}
                     </span>
                  ) : (
                     <Link href={`/${val.toLowerCase()}`} className="mx-1">
                        {val.toUpperCase()}
                     </Link>
                  )}

                  {index <= 2 && <span>┃</span>}
               </Fragment>
            ))}
         </div>
      </Box>
   )
}
