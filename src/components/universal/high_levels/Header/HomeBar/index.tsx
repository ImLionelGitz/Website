import { Box, BoxAlign } from '@/cores/Box'
import style from './index.module.scss'

export default function HomeBar() {
   return (
      <Box alignment={BoxAlign.CENTER} className={style.HomeBar}>
         <div className={style.Bar}></div>
      </Box>
   )
}
