// pages/reviews.tsx
import ReviewCarousel from "../../components/ReviewsCarousel";
import structs from "@/app/styles/components/struct.module.scss"

export default function ReviewsBar() {
    return (
        <div className={`${structs.reviewsBar} sectionTear`}>
            <h1>Our Reviews</h1>

            <div className="flex justify-center">
                <ReviewCarousel />
            </div>
        </div>
    );
}
