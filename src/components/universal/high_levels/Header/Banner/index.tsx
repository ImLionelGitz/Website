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
               <img src="/logo.webp" alt="" />
               <p>{content}</p>
            </div>
         </div>
      </div>
   )
}
