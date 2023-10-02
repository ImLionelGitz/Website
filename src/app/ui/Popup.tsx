import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

import Button from "../widgets/Button";
import Image from "next/image";

export default function Popup() {
    const [platforms, setPlatform] = useState<Array<{ platform: string, logo: string }>>([]),
    [links, setLink] = useState<Array<string>>([])

    const ContentHolder = useRef<HTMLDivElement>(null),
    PopupUI = useRef<HTMLDivElement>(null)

    if (typeof window !== 'undefined') {
        addEventListener('game_slot_clicked', (e) => {
            const event = e as CustomEvent,
            data = event.detail as { available: Array<{ platform: string, logo: string }>, urls: string[] }

            const platforms = ContentHolder.current,
            popup = PopupUI.current

            if (platforms && popup) {
                setPlatform(data.available)
                setLink(data.urls)
                platforms.classList.add('ShowUp')
                popup.classList.remove('HideBG')
            }
        })
    }

    function CloseModal() {
        const platforms = ContentHolder.current,
        popup = PopupUI.current

        if (popup && platforms) {
            platforms.classList.remove('ShowUp')
            popup.classList.add('HideBG')
        }
    }

    function OutClick(e: any) {
        if (e.target == PopupUI.current) CloseModal()
    }

    return (
        <div className="Popup HideBG" ref={PopupUI} onClick={OutClick}>
            <div ref={ContentHolder} className="content">
                <h1 className='p-3 mx-12'>
                    Select a Platform
                </h1>

                <div className='flex justify-center flex-wrap my-4'>
                    {
                        platforms.map((platform, index) => {
                            const link = (links[index]) ? links[index] : '#'

                            return (
                                <Button key={index} href={link} className='m-4'>
                                    <Image src={platform.logo} alt={platform.platform} width={59} height={35} />
                                </Button>
                            )
                        })
                    }
                </div>
                
                <Button className="closeBtn m-1" onclick={() => CloseModal()}>
                    <FontAwesomeIcon icon={faClose} />
                </Button>
            </div>
        </div>
    )
}