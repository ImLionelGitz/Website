import Image from "next/image"
import struct from "@/app/styles/components/struct.module.scss"


export default function ThumbBar({ homepage, thumbSrc }: ThumbBarType) {
    if (homepage) return (
        <div className={struct.thumbnail}>
            <div className="text-center mr-5 absolute">
                <h1 className="text-3xl mb-4 font-bold">Welcome to Liger Creations</h1>
                <p className="mb-5">This is the official website of LionelLeoPlayz. <br /> We make games, thumbnails and videos for our clients!</p>
                <a className="DaButton z-20 relative" href="">Commission Us</a>
            </div>

            <Image src={"/lol.gif"} alt={"Banner"} width={1280} height={700} />
        </div>
    )

    else return (
        <div className={struct.thumbnail + " sectionTear"} style={{ 
            height: "186px", 
            backgroundImage: `url(${thumbSrc})`, 
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}></div>
    )
}