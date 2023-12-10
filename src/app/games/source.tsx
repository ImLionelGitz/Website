'use client'

import dynamic from "next/dynamic"
import { useState, useEffect } from 'react'
import Picture from "../ui/Picture"
import GSlot from "../widgets/Gameslot"
import Footer from "../ui/FooterBar"
import { GameDB } from "../helpers/variables"
import NavBar from "../ui/NavBar"

let PlatformsAvailable: Record<string, string> = {}

export default function Games() {
    const [DatabaseCache, setDatabaseCache] = useState<Record<string, any>>()
    const [PopupUI, SetPopupUI] = useState<JSX.Element>()

    useEffect(() => {
        fetch(GameDB).then(response => response.json()).then(data => {
            setDatabaseCache(data)
        })
    }, [])

    function OnSlotClick(platforms: Array<keyof PlatformsTypes>, links: Array<string>) {
        platforms.forEach((platform, i) => {
            const link = (links[i]) ? links[i] : '#'
            PlatformsAvailable[platform] = link
        })

        if (!PopupUI) {
            const Popup = dynamic(() => import('@/app/ui/Popup'), { ssr: false })
            SetPopupUI(<Popup Type='PLATFORMSMENU' Content={PlatformsAvailable} onClose={CloseModal} />)
        }

        else dispatchEvent(new CustomEvent('open_modal', { detail: PlatformsAvailable }))
    }

    function CloseModal(e: any) {
        const Element = e.target as HTMLElement

        if (Element.classList.contains('Popup')) {
            PlatformsAvailable = {}
            dispatchEvent(new Event('close_modal'))
        }
    }

    if (DatabaseCache) return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <Picture imgPath='gaming' className='h-64' />

            <div className='text-center text-2xl font-bold' style={{ background: 'var(--lower-color)' }}>
                <div className='pt-3'>
                    <h1 className="inline">Games</h1>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {
                        Object.keys(DatabaseCache).map((token, index) => {
                            const data = DatabaseCache[token] as GameDBStructure

                            return (
                                <GSlot key={index} icon={data.icon} title={data.name} platforms={data.available}
                                    links={data.urls} onSlotClick={OnSlotClick} className="scale-75" />
                            )
                        })
                    }
                </div>
            </div>

            { PopupUI && PopupUI }
            <Footer className='flex flex-col justify-evenly flex-1' />

            <style>{`.GSlot{position:relative;width:250px;height:345px;border-radius:6px;overflow:hidden;background:#047857;display:flex;align-items:flex-end;justify-content:space-around;box-shadow:5px 3px 20px var(--shadow-color)}.GSlot img{transition:0.2s linear}.GSlot h3{position:absolute;transition:0.1s ease;background:linear-gradient(360deg,black,transparent);color:white;font-size:20px;height:0;width:inherit}.GSlot:hover img{transform:scale(1.05)}.GSlot:hover h3{height:77px}
            `}</style>
        </div>
    )
}