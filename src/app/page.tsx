'use client'

import dynamic from "next/dynamic"
import Footer from "./ui/FooterBar"
import Picture from "./ui/Picture"
import GSlot from "./widgets/Gameslot"
import Main from "./widgets/Main"
import VCard from "./widgets/Videocard"
import Popup from "./ui/Popup"


const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

export default function Home() {
  return (
    <Main className='overflow-x-hidden'>
      <NavBar />
      <Picture imgPath="/gaming.png" />

      <div className='text-center mt-5 font-bold text-2xl'>
        <h1>
          Explore These Random Games!
        </h1>

        <div className='flex flex-wrap justify-center'>
          <GSlot icon="/logo.png" title="lolol" platforms={[]} links={[]} className='scale-75' />
          <GSlot icon="/logo.png" title="lolol" platforms={[]} links={[]} className='scale-75' />
          <GSlot icon="/logo.png" title="lolol" platforms={[]} links={[]} className='scale-75' />
        </div>
      </div>

      <div className='text-center my-4'>
        <h1 className="font-bold text-2xl mb-6">
          Tune In For Fresh Content! (Maybe)
        </h1>

        <div className='flex flex-wrap justify-center'>
          <VCard icon="/logo.png" title="lol" url="#" className='max-[768px]:scale-75' />
        </div>
      </div>

      <Popup />

      <Footer />
    </Main>
  )
}