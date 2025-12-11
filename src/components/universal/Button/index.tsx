import styles from './index.module.scss'

interface Button {
   text: string
}

export default function Button({ text }: Button) {
   return <button className={styles.Button}>{text}</button>
}
