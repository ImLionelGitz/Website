import {
   Card,
   CardBody,
   CardFooter,
   CardText,
   CardTitle,
} from 'react-bootstrap'

interface News {
   title: string
   firstline: string
   writer: string
   uploadDate: string
   link: string
}

export default function NewsCard(props: News) {
   const { title, firstline, writer, uploadDate, link } = props
   const sanitizedTitle = title.substring(0, 17)
   const sanitizedCont = firstline.substring(0, 87)

   return (
      <Card className="mx-3">
         <CardBody style={{ backgroundColor: '#eee7d7' }}>
            <CardTitle>{sanitizedTitle}</CardTitle>

            <CardText>{sanitizedCont + '... '}</CardText>

            <CardText>
               <a href={link}>Read more</a>
            </CardText>

            <CardText className="float-end">
               <i>- {writer}</i>
            </CardText>
         </CardBody>

         <CardFooter style={{ backgroundColor: '#e5decf' }}>
            <small>
               <i style={{ fontFamily: 'Cinzel' }}>{uploadDate}</i>
            </small>
         </CardFooter>
      </Card>
   )
}
