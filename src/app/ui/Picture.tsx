import { useState, useEffect } from "react";
import { GetCache, GetThumbnail, SetCache } from "../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Picture({ ytThumb, imgPath, className }: LHeader) {
    const [thumbnail, setThumbnail] = useState<string>(imgPath)

    useEffect(() => {
        if (ytThumb) {
            const cache = GetCache('YTthumbnail')

            if (cache) {
                setThumbnail(cache)
            }

            else {
                GetThumbnail().then(data => {
                    SetCache('YTthumbnail', data)
                    setThumbnail(data)
                })
            }
        }
    }, [ytThumb])

    return (
        <div className={((ytThumb) ? 'Picture headerEng' : 'Picture') + ((className) ? ` ${className}` : '')}>
            {
                ytThumb &&

                <h1 className='absolute text-white ml-4 font-bold text-2xl'>
                    <FontAwesomeIcon className='mr-2' icon={faVideoCamera} />
                    Check Out My Latest Video!
                </h1>
            }
            <div></div>
            <Image priority alt="Header" src={thumbnail} width={1280} height={720} style={{ width: '100%' }} />
        </div>
    )
}