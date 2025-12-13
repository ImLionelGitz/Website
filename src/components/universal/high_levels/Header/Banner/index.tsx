import Link from 'next/link'
import style from './index.module.scss'

interface Banner {
   image: string
   content: string
}

export default function Banner({ image, content }: Banner) {
   return (
      <div
         style={{ backgroundImage: `url("${image}")` }}
         className={style.Banner}
      >
         <div className={style.Content}>
            <img className={style.Gradient} src="/Dark.png" alt="" />

            <div className={style.Info}>
               <Link href="/">
                  <img src="/logo.webp" alt="" className="w-100" />
               </Link>
               <p>{content}</p>
            </div>
         </div>
      </div>
   )
}
