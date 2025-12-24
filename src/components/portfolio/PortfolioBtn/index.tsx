import { FaImage } from 'react-icons/fa'
import style from './index.module.scss'

export default function PortfolioBtn() {
   return (
      <div className={style.PortfolioBtn}>
         <img src="/MenuBtn.png" alt="" />
         <FaImage className="position-absolute" />
      </div>
   )
}
