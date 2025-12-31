import { Card, CardBody, CardHeader } from 'react-bootstrap'
import style from './index.module.scss'
import { useState } from 'react'

interface VideoCard {
   videoID: string
   title: string
   uploadDate: string
}

export default function VideoCard(props: VideoCard) {
   const { videoID, title, uploadDate } = props
   const [reveal, setShowUP] = useState(false)

   return (
      <Card
         className={`${style.VideoCard} not-loaded ${reveal ? 'loaded' : ''}`}
      >
         <CardHeader className={style.VideoPlr}>
            <iframe
               className="w-100 h-100"
               onLoad={() => setShowUP(true)}
               src={`https://www.youtube.com/embed/${videoID}?controls=0`}
            ></iframe>
         </CardHeader>

         <CardBody className="text-center">
            <h2>{title}</h2>
            <h3>{uploadDate}</h3>
         </CardBody>
      </Card>
   )
}
