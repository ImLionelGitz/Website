'use client'

import dynamic from "next/dynamic"
import Footer from "./ui/FooterBar"
import GSlot from "./widgets/Gameslot"
import VCard from "./widgets/Videocard"
import NavBar from "./ui/NavBar"
import Picture from "./ui/Picture"

import { useEffect, useState } from 'react'
import { GameDB, VideoDB } from "./helpers/variables"
import { GetCache, GetRandomData, SetCache } from "./helpers/functions"

let PlatformsAvailable: Record<string, string> = {}

export default function Home() {
  const [Database, setDatabase] = useState<{ video: VideoDBStructure, apps: GameDBStructure[] }>()
  const [popupUI, setPopupUI] = useState<JSX.Element>()

  useEffect(() => {
    const cache = GetCache('HomePageData')

    if (cache) {
      setDatabase(cache)
    }

    else {
      Promise.all([VideoDB, GameDB].map(url => fetch(url).then(response => response.json()))).then(data => {
        const dataforstore: any = {}

        const videos: Record<string, VideoDBStructure> = data[0]
        const apps: Record<string, GameDBStructure> = data[1]

        const videoIndice = GetRandomData(videos, 1, true)
        const appsIndice = GetRandomData(apps, 1)

        dataforstore['video'] = videos[videoIndice[0]]
        dataforstore['apps'] = appsIndice.map(indice => apps[indice])

        setDatabase(dataforstore)
        SetCache('HomePageData', dataforstore)
      })
    }
  }, [])

  function OnSlotClick(platforms: Array<keyof PlatformsTypes>, links: Array<string>) {
    platforms.forEach((platform, i) => {
      const link = (links[i]) ? links[i] : '#'
      PlatformsAvailable[platform] = link
    })

    if (!popupUI) {
      const Popup = dynamic(() => import('@/app/ui/Popup'), { ssr: false })
      setPopupUI(<Popup Type='PLATFORMSMENU' Content={PlatformsAvailable} onClose={CloseModal} />)
    }

    else dispatchEvent(new Event('open_modal'))
  }

  function CloseModal(e: any) {
    const Element = e.target as HTMLElement

    if (Element.classList.contains('Popup')) {
      PlatformsAvailable = {}
      dispatchEvent(new Event('close_modal'))
    }
  }

  if (Database) return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <NavBar />
      <Picture ytThumb imgPath="" className="headerEnlarge" />

      <div style={{ background: 'var(--lower-color)' }}>
        <div className='text-center pt-5 font-bold text-2xl'>
          <h1>Explore These Random Games!</h1>

          <div className='flex flex-wrap justify-center'>
            {
              Database.apps.map((app, index) => {
                return (
                  <GSlot key={index} icon={app.icon} title={app.name} platforms={app.available}
                    links={app.urls} className='scale-75' onSlotClick={OnSlotClick} />
                )
              })
            }
          </div>
        </div>

        <div className='text-center py-4'>
          <h1 className="font-bold text-2xl mb-6">
            Tune In For Fresh Content! (Maybe)
          </h1>

          <div className='flex flex-wrap justify-center'>
            <VCard icon={Database.video.thumbnail} title={Database.video.name} url={Database.video.playlist}
              className='max-[768px]:scale-75' activity="none" />
          </div>
        </div>
      </div>

      {popupUI && popupUI}
      <Footer className='flex flex-col justify-evenly flex-1' />

      <style>{`.GSlot{position:relative;width:250px;height:345px;border-radius:6px;overflow:hidden;background:#047857;display:flex;align-items:flex-end;justify-content:space-around;box-shadow:5px 3px 20px var(--shadow-color)}.GSlot img{transition:0.2s linear}.GSlot h3{position:absolute;transition:0.1s ease;background:linear-gradient(360deg,black,transparent);color:white;font-size:20px;height:0;width:inherit}.GSlot:hover img{transform:scale(1.05)}.GSlot:hover h3{height:77px}`
        + `.VCard {display: inline-flex;flex-direction: column;align-items: center;font-size: 20px;transition: 0.2s ease-in;}.VCard .container {position: relative;width: 345px;height: 245px;overflow: hidden;}.VCard .container img {max-width: 345px;max-height: 245px;transition: 0.2s linear;}.VCard .container img:hover {transform: scale(1.03);}.VCard .container .Shadow {position: absolute;background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.0));right: 0;left: 0;bottom: 0;height: 50%;pointer-events: none;}.VCard:hover {color: #047857;}`
        + `.headerEnlarge:hover img {transform: scale(1.05);}`}</style>
    </div>
  )
}