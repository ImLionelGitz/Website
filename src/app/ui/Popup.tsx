import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { Platforms } from "../helpers/variables";

import Button from "../widgets/Button";
import Image from "next/image";
import { SharedDataHolder } from "../helpers/functions";

export default function Popup({ Open, OpenerFunction, Type, Content, className }: Popup) {
    const ContentHolder = useRef<HTMLDivElement>(null),
    PopupUI = useRef<HTMLDivElement>(null)

    const [ platforms, setPlatform ] = useState<Record<string, string>>({})

    useEffect(() => {
        if (Open) {
            if (Type == 'SETTINGSMENU') {
                const platforms = ContentHolder.current,
                    popup = PopupUI.current

                if (platforms && popup) {
                    platforms.classList.add('ShowUp')
                    popup.classList.remove('HideBG')
                }
            }

            else {
                const platforms = ContentHolder.current,
                    popup = PopupUI.current

                if (platforms && popup) {
                    setPlatform(SharedDataHolder.GetData())
                    platforms.classList.add('ShowUp')
                    popup.classList.remove('HideBG')
                }
            }

            OpenerFunction(false)
        }
    }, [Open, OpenerFunction, Type])

    function CloseModal() {
        const platforms = ContentHolder.current,
            popup = PopupUI.current

        if (popup && platforms) {
            platforms.classList.remove('ShowUp')
            popup.classList.add('HideBG')
            SharedDataHolder.ClearData()
        }
    }

    function OutClick(e: any) {
        if (e.target == PopupUI.current) CloseModal()
    }

    if (Type == 'SETTINGSMENU' && Content.length !== 0) return (
        <div className="Popup HideBG" ref={PopupUI} onClick={OutClick}>
            <div ref={ContentHolder} className="content">
                <h1 className='p-3 mx-12'>
                    Filter
                </h1>

                <div className={((className) ? className : 'flex justify-center flex-wrap my-4')}>
                    {
                        Content.map(settingOption => settingOption)
                    }
                </div>

                <Button className="closeBtn m-1" onclick={() => CloseModal()}>
                    <FontAwesomeIcon icon={faClose} />
                </Button>
            </div>
        </div>
    )

    else return (
        <div className="Popup HideBG" ref={PopupUI} onClick={OutClick}>
            <div ref={ContentHolder} className="content">
                <h1 className='p-3 mx-12'>
                    Select a Platform
                </h1>

                <div className='flex justify-center flex-wrap my-4'>
                    {
                        Object.keys(platforms).map((platform, index) => {

                            return (
                                <Button key={index} target='_blank' href={platforms[platform]} className='m-4'>
                                    <Image src={Platforms[platform as keyof PlatformsTypes]} alt={platform} width={59} height={35} />
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