import { useState } from "react";
import { GetCache, GetThumbnail, SetCache } from "../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

let StopFetch = false

export default function Picture({ ytThumb, imgPath, className }: LHeader) {
    const _class = (ytThumb) ? 'Picture headerEng' : 'Picture',
        headerTxt = (ytThumb) ?
            <h1 className='absolute text-white ml-4 font-bold text-2xl'>
                <FontAwesomeIcon className='mr-2' icon={faVideoCamera} />
                Check Out My Latest Video!
            </h1> :
            ''

    const [thumbnail, setThumbnail] = useState<string>(imgPath)

    if (typeof window !== 'undefined') {
        if (ytThumb) {
            if (!StopFetch) {
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

                StopFetch = true
            }
        }
    }

    return (
        <div className={_class + ' ' + ((className) ? className : '')}>
            {headerTxt}
            <div></div>
            <Image priority alt="Header" src={thumbnail} width={1280} height={720} style={{ width: '100%' }} />
        </div>
    )
}