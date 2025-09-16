import { Star } from 'lucide-react';
import Image from 'next/image';
import uis from '@/app/styles/components/ui.module.scss'

type Review = {
    name: string;
    profileUrl: string;
    comment: string;
    rating: number;
};

export default function ReviewsCard({ name, profileUrl, comment, rating }: Review) {
    return (
        <div className={`${uis.reviewsCard} p-1 max-w-fit mx-auto`}>
            <div className={`${uis.reviewsCardInner} p-2`}>
                <div className="flex items-center flex-col">
                    <Image
                        src={profileUrl}
                        alt={`${name}'s profile`}
                        width={200}
                        height={200}
                        className="rounded-full"
                    />

                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                fill={i < rating ? '#047857' : 'none'}
                                strokeWidth={1.5}
                                className="w-5 h-5"
                            />
                        ))}
                    </div>
                </div>

                <div className="text-justify ml-7">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="mt-2">{comment}</p>
                </div>
            </div>
        </div>
    );
}
