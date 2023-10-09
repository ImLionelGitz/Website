'use client'

import dynamic from "next/dynamic"
import Picture from "../ui/Picture"
import Button from "../widgets/Button"
import Popup from "../ui/Popup"
import Main from "../widgets/Main"
import Footer from "../ui/FooterBar"
import VCard from "../widgets/Videocard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import Input from "../widgets/Input"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

export default function Videos() {
    function OnSettingClick() {
        const event = new CustomEvent('settings_clicked')
        window.dispatchEvent(event)
    }

    return (
        <Main className='overflow-x-hidden'>
            <NavBar />
            <Picture imgPath="/video.png" className='h-96' />

            <div className='text-center text-2xl font-bold'>
                <div className='mt-3'>
                    <h1 className="inline">Videos</h1>
                    <Button onclick={OnSettingClick} className="absolute right-0 mr-4">
                        <FontAwesomeIcon icon={faFilter} />
                    </Button>
                </div>

                <div className='flex flex-wrap justify-center'>
                    <VCard icon="/gaming.png" title="lol" url="#" className='scale-75' />
                    <VCard icon="/gaming.png" title="lol" url="#" className='scale-75' />
                    <VCard icon="/gaming.png" title="lol" url="#" className='scale-75' />
                    <VCard icon="/gaming.png" title="lol" url="#" className='scale-75' />
                </div>
            </div>

            <Popup settingMode className='flex flex-wrap items-center flex-col mt-6' settingOptions={[
                <Input type='CHECKBOX' key={1}>Active</Input>,
                <Input type='CHECKBOX' key={2}>Semi-Active</Input>,
                <Input type='CHECKBOX' key={3}>Retired</Input>
            ]} />

            <Footer />
        </Main>
    )
}