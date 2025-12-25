import {
   FaYoutube,
   FaTwitter,
   FaTiktok,
   FaInstagram,
   FaDeviantart,
} from 'react-icons/fa'

import style from './index.module.scss'
import { SiRoblox } from 'react-icons/si'

export default function Footer() {
   const icons = [
      FaYoutube,
      FaTwitter,
      FaTiktok,
      FaInstagram,
      FaDeviantart,
      SiRoblox,
   ]

   const links = [
      'https://www.youtube.com/@LionelLeoPlayz',
      'https://twitter.com/LionelLeoGFX',
      'https://www.tiktok.com/@lionelleoplayz',
      'https://www.instagram.com/lionelleoplay.z',
      'https://www.deviantart.com/timmystudios',
      'https://www.roblox.com/groups/4708773/Liger',
   ]

   const mySite = 'https://github.com/ImLionelGitz/My-Site'
   const date = new Date()

   return (
      <div className={style.reviewsBar}>
         <h1>Find Us On</h1>

         <div className="overflow-hidden mb-3">
            {icons.map((Icon, index) => {
               return (
                  <a
                     key={index}
                     href={links[index]}
                     target="_blank"
                     className="m-2 fs-3"
                  >
                     <Icon />
                  </a>
               )
            })}
         </div>

         <p>
            © 2020 - {date.getFullYear()}. all rights reserved for logos &
            images. <br />
            <span className="small text-capitalize">
               <em>
                  templates & designs are{' '}
                  <a target="_blank" href={mySite}>
                     open source
                  </a>
                  .
               </em>
            </span>
         </p>
      </div>
   )
}
