import { Card, CardBody, CardHeader } from 'react-bootstrap'
import style from './index.module.scss'

export default function VideoCard() {
   return (
      <Card className={style.VideoCard}>
         <CardHeader className={style.VideoPlr}>
            <iframe
               className="w-100 h-100"
               //    onLoad={() => setShowUP('comeUp')}
               src="https://www.youtube.com/embed/1WF1Dx_OBYs?controls=0"
            ></iframe>
         </CardHeader>

         <CardBody className="text-center">
            <h2>BREAKING 20 Roblox Rivals WORLD RECORDS In 24 HOURS..</h2>
            <h3>2 May 2000</h3>
         </CardBody>
      </Card>
   )
}
