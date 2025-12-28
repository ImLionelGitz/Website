/* eslint-disable @next/next/no-img-element */
import { FaCode, FaImage } from 'react-icons/fa'
import { GiCube } from 'react-icons/gi'
import style from './index.module.scss'

interface PortfolioBtn {
   icon: 'Media' | 'Model' | 'Code'
   onClick: () => void
}

export default function PortfolioBtn({ icon, onClick }: PortfolioBtn) {
   return (
      <div onClick={onClick} className={style.PortfolioBtn}>
         <img src="/MenuBtn.png" alt="" />

         {icon === 'Media' && <FaImage className="position-absolute" />}
         {icon === 'Model' && <GiCube className="position-absolute" />}
         {icon === 'Code' && <FaCode className="position-absolute" />}
      </div>
   )
}
