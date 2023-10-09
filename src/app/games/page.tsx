'use client'

import dynamic from "next/dynamic"
import Picture from "../ui/Picture"
import GSlot from "../widgets/Gameslot"
// import Dropdown from "../widgets/Dropdown"
// import Button from "../widgets/Button"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCog } from "@fortawesome/free-solid-svg-icons"
import Popup from "../ui/Popup"
import Main from "../widgets/Main"
import Footer from "../ui/FooterBar"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

export default function Games() {
    // function OnSettingClick() {
    //     const event = new CustomEvent('settings_clicked')
    //     window.dispatchEvent(event)
    // }

    return (
        <Main>
            <NavBar />
            <Picture imgPath="/gaming.png" className='h-64' />

            <div className='text-center text-2xl font-bold'>
                <div className='mt-3'>
                    <h1 className="inline">Games</h1>
                    {/* <Button onclick={OnSettingClick} className="absolute right-0 mr-4">
                        <FontAwesomeIcon icon={faCog} />
                    </Button> */}
                </div>

                <div className='flex flex-wrap justify-center'>
                    <GSlot icon="/logo.png" title="lolol" platforms={[]} links={[]} className='scale-75' />
                    <GSlot icon="/logo.png" title="lolol" platforms={[]} links={[]} className='scale-75' />
                    <GSlot icon="/logo.png" title="lolol" platforms={[]} links={[]} className='scale-75' />
                </div>
            </div>

            {/* <Popup settingMode className='w-2/4' settingOptions={[
                <Dropdown key={1} label="Platform" msg="Select a Platform" options={['lol']} />
            ]} /> */}

            <Popup />
            <Footer />
        </Main>
    )
}