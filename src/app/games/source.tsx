'use client'

import dynamic from "next/dynamic"
import { useState, useEffect } from 'react'
import Picture from "../ui/Picture"
import GSlot from "../widgets/Gameslot"
import Main from "../widgets/Main"
import Footer from "../ui/FooterBar"
import { GameDB } from "../helpers/variables"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

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
        <Main className='min-h-screen flex flex-col'>
            <NavBar />
            <Picture imgPath='gaming' className='h-64' />

            <div className='text-center text-2xl font-bold'>
                <div className='mt-3'>
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
        </Main>
    )
}