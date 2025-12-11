import Card from './Card'
import Carousel from './Carousel'

interface CarouselData {
   reviews: review[]
}

export default function ReviewGallery({ reviews }: CarouselData) {
   return (
      <Carousel>
         {reviews.map((review, i) => (
            <Card
               title={review.name}
               content={review.comments}
               image={review.pfp}
               stars={review.ratings}
               key={i}
            />
         ))}
      </Carousel>
   )
}
