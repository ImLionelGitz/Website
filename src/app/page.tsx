'use client'

import dynamic from "next/dynamic"
import Footer from "./ui/FooterBar"
import GSlot from "./widgets/Gameslot"
import Main from "./widgets/Main"
import VCard from "./widgets/Videocard"

import { useEffect, useState } from 'react'
import { GameDB, VideoDB } from "./helpers/variables"
import { GetCache, GetRandomData, SetCache } from "./helpers/functions"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })
const Picture = dynamic(() => import('@/app/ui/Picture'), { ssr: false })

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
    <Main className='overflow-x-hidden min-h-screen flex flex-col'>
      <NavBar />
      <Picture ytThumb imgPath="" />

      <div className='text-center mt-5 font-bold text-2xl'>
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

      <div className='text-center my-4'>
        <h1 className="font-bold text-2xl mb-6">
          Tune In For Fresh Content! (Maybe)
        </h1>

        <div className='flex flex-wrap justify-center'>
          <VCard icon={Database.video.thumbnail} title={Database.video.name} url={Database.video.playlist}
            className='max-[768px]:scale-75' activity="none" />
        </div>
      </div>
      {popupUI && popupUI}
      <Footer className='flex flex-col justify-evenly flex-1' />
    </Main>
  )
}