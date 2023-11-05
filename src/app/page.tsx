'use client'

import dynamic from "next/dynamic"
import Footer from "./ui/FooterBar"
import GSlot from "./widgets/Gameslot"
import Main from "./widgets/Main"
import VCard from "./widgets/Videocard"
import Popup from "./ui/Popup"

import { useEffect, useState } from 'react'
import { GameDB, VideoDB } from "./helpers/variables"
import { GetCache, GetRandomData, SetCache } from "./helpers/functions"


const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false }),
  Picture = dynamic(() => import('@/app/ui/Picture'), { ssr: false })

let StopFetch = false

export default function Home() {
  const [DataStore, setDataStore] = useState<{ video: VideoDBStructure, apps: GameDBStructure[] }>(),
  [popupVisible, setVisible] = useState(false)

  useEffect(() => {
    if (!StopFetch && typeof window !== 'undefined') {
      const cache = GetCache('HomePageData')

      if (cache) {
        setDataStore(cache)
      }

      else {
        Promise.all([VideoDB, GameDB].map(url => fetch(url).then(response => response.json()))).then(data => {
          const dataforstore: any = {}

          const videos: Record<string, VideoDBStructure> = data[0],
            apps: Record<string, GameDBStructure> = data[1]

          const videoIndice = GetRandomData(videos, 1, true),
            appsIndice = GetRandomData(apps, 1)

          dataforstore['video'] = videos[videoIndice[0]]
          dataforstore['apps'] = appsIndice.map(indice => apps[indice])

          setDataStore(dataforstore)
          SetCache('HomePageData', dataforstore)
        })
      }

      StopFetch = true
    }
  }, [DataStore])

  if (DataStore) return (
    <Main className='overflow-x-hidden min-h-screen flex flex-col'>
      <NavBar />
      <Picture ytThumb imgPath="" />

      <div className='text-center mt-5 font-bold text-2xl'>
        <h1>
          Explore These Random Games!
        </h1>

        <div className='flex flex-wrap justify-center'>
          {
            DataStore.apps.map((app, index) => {
              return (
                <GSlot key={index} icon={app.icon} title={app.name} platforms={app.available}
                  links={app.urls} className='scale-75' openPopup={setVisible} />
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
          <VCard icon={DataStore.video.thumbnail} title={DataStore.video.name} url={DataStore.video.playlist}
            className='max-[768px]:scale-75' activity="none" />
        </div>
      </div>

      <Popup Type='PLATFORMSMENU' Content={[]} Open={popupVisible} OpenerFunction={setVisible} />

      <Footer className='flex flex-col justify-evenly flex-1' />
    </Main>
  )
}