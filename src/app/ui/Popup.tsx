import { useEffect, useState } from 'react'
import Image from "next/image";
import { Platforms } from '../helpers/variables';
import Link from 'next/link';

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
                                    <Link key={i} target='_blank' href={contents[platform]}
                                        className='m-4 overflow-hidden rounded-md'>
                                        <Image src={Platforms[platform as keyof PlatformsTypes]} alt={platform} width={59} height={35} />
                                    </Link>
                                )
                            })
                            :
                            contents.map((setting: JSX.Element) => setting)
                    }
                </div>
            </div>

            <style>
                {
                     `${(Type === 'SETTINGSMENU') ? '.CheckBox {display: block;position: relative;padding-left: 35px;margin-bottom: 12px;cursor: pointer;font-size: 22px;user-select: none;}.CheckBox input {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}.CheckBox .checkbox {position: absolute;top: 0;left: 0;height: 25px;width: 25px;background-color: #eee;border: 2px solid;border-radius: 4px;}.CheckBox .checkbox:after {content: "";position: absolute;display: none;}.CheckBox:hover input ~ .checkbox {background-color: #ccc;}.CheckBox input:checked ~ .checkbox {background-color: #16a34a;}.CheckBox input:checked ~ .checkbox:after {display: block;}.CheckBox .checkbox:after {left: 7px;top: 1px;width: 8px;height: 17px;border: solid white;border-width: 0 3px 3px 0;transform: rotate(45deg);}' 
                     : ''}.Popup {align-items: center;display: flex;justify-content: center;position: fixed;top: 0;bottom: 0;left: 0;right: 0;background: rgba(0, 0, 0, 0.7);transition: all 0.4s;}.Popup .content {position: absolute;transition: 0.2s ease;background: var(--lower-color);color: var(--text-color);overflow: hidden;text-align: center;transform: translateX(-999vh);border-radius: 4px;width: 50%;}.Popup .content h1 {border-bottom: 2px solid var(--text-color);}@media only screen and (max-width: 480px) {.Popup {align-items: flex-end;}.Popup .ShowUp {transform: translateY(0) !important;}.Popup .content {transform: translateY(999px);width: 100%;}}`
                }
            </style>
        </div>
    )
}