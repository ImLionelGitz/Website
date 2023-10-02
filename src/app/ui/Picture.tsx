import { useState } from "react";
import { GetThumbnail } from "../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Picture() {
    const [thumbnail, setThumbnail] = useState<string>('')

    // GetThumbnail().then(data => {
    //     setThumbnail(data)
    // })

    return (
        <div className="Picture">
            <h1 className='absolute text-white ml-4 font-bold text-2xl'>
                <FontAwesomeIcon className='mr-2' icon={faVideoCamera} />

                Check Out My Latest Video!
            </h1>
            <div></div>
            <Image alt="Header" src='/lol.webp' width={1280} height={720} style={{ width: '100%' }} />
        </div>
    )
}