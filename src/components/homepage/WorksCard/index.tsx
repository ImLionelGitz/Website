import styles from './index.module.scss'

interface WorksCard {
   icon: string
   title: string
   info: string
}

// de
export default function WorksCard({ icon, title, info }: WorksCard) {
   const cleanInfo = info.substring(0, 37)
   const cleanTitle = title.substring(0, 10)

   return (
      <div className={styles.WorksCard}>
         <a href="#">
            <div
               style={{ backgroundImage: `url(${icon})` }}
               className={styles.Icon}
            ></div>
         </a>

         <p className={styles.Title}>{cleanTitle}</p>
         <p className={styles.Descript}>{cleanInfo}</p>
      </div>
   )
}
