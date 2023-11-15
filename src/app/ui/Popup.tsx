import { useEffect, useState } from 'react'
import Image from "next/image";
import Button from "../widgets/Button";
import { Platforms } from '../helpers/variables';

export default function Popup({ Type, Content, onClose, className }: Popup) {
    const [visible, setVisible] = useState(false)
    const [contents, setContent] = useState(Content)

    useEffect(() => {
        addEventListener('open_modal', (e: any) => {
            if (e.detail) {
                setContent(e.detail)
            }
            setVisible(true)
        })
        addEventListener('close_modal', () => setVisible(false))

        const timer = setTimeout(() => setVisible(true))
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={"Popup" + ((visible) ? '' : ' HideBG')} onClick={onClose}>
            <div className={"content" + ((visible) ? ' ShowUp' : '')}>
                <h1 className='p-3 mx-12'>
                    {
                        (Type === 'SETTINGSMENU') ? 'Filter' : 'Select a Platform'
                    }
                </h1>

                <div className={((className) ? className : 'flex justify-center flex-wrap my-4')}>
                    {
                        (Type === 'PLATFORMSMENU') ?
                            Object.keys(contents).map((platform, i) => {
                                return (
                                    <Button key={i} target='_blank' href={contents[platform]}
                                        className='m-4 overflow-hidden rounded-md'>
                                        <Image src={Platforms[platform as keyof PlatformsTypes]} alt={platform} width={59} height={35} />
                                    </Button>
                                )
                            })
                            :
                            contents.map((setting: JSX.Element) => setting)
                    }
                </div>
            </div>
        </div>
    )
}