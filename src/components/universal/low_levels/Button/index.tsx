import Link from 'next/link'
import styles from './index.module.scss'
import { MouseEvent } from 'react'

interface Button {
   text: string
   href?: string
   onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ text, href, onClick }: Button) {
   const button = href ? (
      <Link href={href} className={styles.Button}>
         {text}
      </Link>
   ) : (
      <button onClick={onClick} className={styles.Button}>
         {text}
      </button>
   )

   return button
}
