import PortfolioCard from '../PortfolioCard'
import style from './index.module.scss'

export default function PortfolioContain() {
   return (
      <>
         <div></div>

         <div className="d-flex flex-wrap justify-content-center position-relative">
            <PortfolioCard />

            <PortfolioCard />
         </div>
      </>
   )
}
