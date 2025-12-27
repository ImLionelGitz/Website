import { FaImage } from 'react-icons/fa'
import { GiCube } from 'react-icons/gi'
import { SiHaxe } from 'react-icons/si'
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
         {icon === 'Code' && <SiHaxe className="position-absolute" />}
      </div>
   )
}
