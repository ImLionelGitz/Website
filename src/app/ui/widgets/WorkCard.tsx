import Image from "next/image"

export default function WorkCard({ workType, description }: WorkCardData) {
    let icon = ""

    switch (workType) {
        case "Games":
            icon = "/logo2.png"
            break
        case "Videos":
            icon = "/logo2.svg"
            break
    }

    return (
        <a href="" className="w-36 mx-9">
            <Image className="paperBG" alt="work logo" src={icon} width={500} height={500} />
            <p className="m-2">{description}</p>
        </a>
    )
}