import { Box, BoxAlign } from '@/cores/Box'
import style from './index.module.scss'
import Link from 'next/link'
import { Fragment } from 'react/jsx-runtime'

export default function NavBar() {
   const navs = ['Apps', 'Videos', 'Portfolio', 'Contact']

   return (
      <Box alignment={BoxAlign.CENTER} className={style.Navbar}>
         <div className={style.Bar}></div>
         <img src="/plaque.png" alt="" />

         <div className={style.NavContent}>
            {navs.map((val, index) => (
               <Fragment key={index}>
                  <Link href={'#'} className="mx-1">
                     {val.toUpperCase()}
                  </Link>

                  {index <= 2 && <span>┃</span>}
               </Fragment>
            ))}
         </div>
      </Box>
   )
}
