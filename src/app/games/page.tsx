'use client'

import dynamic from "next/dynamic"
import Picture from "../ui/Picture"
import GSlot from "../widgets/Gameslot"
import { useState, useEffect } from 'react'
import Popup from "../ui/Popup"
import Main from "../widgets/Main"
import Footer from "../ui/FooterBar"
import { GameDB, Images } from "../helpers/variables"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

let StopFetch = false

export default function Games() {
    const [DB, SetDB] = useState<any>(),
        [popupVisible, setVisible] = useState(false)

    useEffect(() => {
        if (!StopFetch) {
            fetch(GameDB).then(response => response.json()).then(data => {
                SetDB(data)
            })

            StopFetch = true
        }
    })

    if (DB) return (
        <Main className='min-h-screen flex flex-col'>
            <NavBar />
            <Picture imgPath={Images.GAMING} className='h-64' />

            <div className='text-center text-2xl font-bold'>
                <div className='mt-3'>
                    <h1 className="inline">Games</h1>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {
                        Object.keys(DB).map((token, index) => {
                            const data = DB[token] as GameDBStructure

                            return (
                                <GSlot key={index} icon={data.icon} title={data.name} platforms={data.available}
                                    links={data.urls} className='scale-75' openPopup={setVisible} />
                            )
                        })
                    }
                </div>
            </div>

            <Popup Content={[]} Type='PLATFORMSMENU' Open={popupVisible} OpenerFunction={setVisible} />
            <Footer className='flex flex-col justify-evenly flex-1' />
        </Main>
    )
}