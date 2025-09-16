'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import ReviewsCard from '../widgets/ReviewsCard';

const reviews = [
    {
        name: 'Alice Johnson',
        profileUrl: '/logo2.png',
        comment: 'This app really helped me stay organized. 102/10!',
        rating: 5,
    },
    {
        name: 'Bob Smith',
        profileUrl: '/logo2.png',
        comment: 'Pretty good, but has some bugs.',
        rating: 4,
    },
    {
        name: 'Jane Doe',
        profileUrl: '/logo2.png',
        comment: 'Did not meet my expectations.',
        rating: 2,
    },
    {
        name: 'Mike Lowrey',
        profileUrl: '/logo2.png',
        comment: 'Simple and effective. Great experience.',
        rating: 5,
    },
];

export default function ReviewCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
            spacing: 16,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <div className="w-full">
            <div ref={sliderRef} className="keen-slider">
                {reviews.map((review, idx) => (
                    <div key={idx} className="keen-slider__slide px-2">
                        <ReviewsCard {...review} />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-orange-950' : 'bg-gray-300'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
