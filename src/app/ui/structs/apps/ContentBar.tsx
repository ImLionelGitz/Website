import { ReactElement } from "react"
import Filter from "../../components/Filter"
import GameCard from "../../widgets/GameCard"
import VideoCard from "../../widgets/VideoCard"


export default function ContentBar({ type }: ContentBarType) {
    let title: string
    let Card: () => ReactElement

    switch (type) {
        case "Videos":
            title = "My Best Videos"
            Card = VideoCard
            break

        case "Apps":
            title = "My Apps"
            Card = GameCard
            break
    }

    return (
        <div className="flex justify-center items-baseline bg-[var(--body-color1)]">
            <Filter />

            <div className="text-center flex flex-col items-center py-4">
                <h1 className="text-3xl mb-4 font-bold">{title}</h1>

                <div className={`grid ${(type === "Apps") ? "grid-cols-3 gap-10" : "grid-cols-2"}`}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>

    )
}