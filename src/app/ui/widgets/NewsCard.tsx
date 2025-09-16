import Image from "next/image"
import { TruncateString } from "../../helpers/functions"

export default function NewsCard({ newsType, title }: NewsCardData) {
    let icon = ""

    switch (newsType) {
        case "Info":
            icon = "/logo2.png"
            break
        case "Alert":
            icon = "/logo2.svg"
            break
        case "Warning":
            icon = "/logo2.svg"
            break
    }

    return (
        <div className="mx-9 flex items-center">
            <Image className="paperBG w-36" alt="work logo" src={icon} width={500} height={500} />

            <div>
                <h2 className="m-2 text-xl font-semibold">{TruncateString(title, 25)}</h2>
                <a className="Over" href="">Read more</a>
            </div>
        </div>
    )
}