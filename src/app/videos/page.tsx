'use client'

import dynamic from "next/dynamic"
import Picture from "../ui/Picture"
import Button from "../widgets/Button"
import Popup from "../ui/Popup"
import Main from "../widgets/Main"
import Footer from "../ui/FooterBar"
import VCard from "../widgets/Videocard"
import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import Input from "../widgets/Input"
import { Images, VideoDB } from "../helpers/variables"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

let StopFetch = false
let previousChkBox: HTMLInputElement

export default function Videos() {
    const [DB, SetDB] = useState<any>(),
        [popupOpen, setPopupVisibility] = useState(false)

    const videoList = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!StopFetch) {
            fetch(VideoDB).then(response => response.json()).then(data => {
                SetDB(data)
            })

            StopFetch = true
        }
    })

    function OnCheck(source: CheckedDataReturnType) {
        const list = videoList.current

        if (list) {
            if (previousChkBox && source.box !== previousChkBox) previousChkBox.checked = false

            list.childNodes.forEach(node => {
                const element = node as HTMLAnchorElement,
                elementAttr = element.getAttribute('activity-status')

                if (elementAttr != source.source) {
                    if (source.value) {
                        element.style.display = 'none'
                    }
                    else element.style.display = 'block'
                }
                else if (element.style.display == 'none') element.style.display = 'block'
            })

            previousChkBox = source.box
        }
    }

    if (DB) return (
        <Main className='overflow-x-hidden'>
            <NavBar />
            <Picture imgPath={Images.VIDEO} className='h-96' />

            <div className='text-center text-2xl font-bold'>
                <div className='mt-3'>
                    <h1 className="inline">Videos</h1>
                    <Button onclick={() => setPopupVisibility(true)} className="absolute right-0 mr-4">
                        <FontAwesomeIcon icon={faFilter} />
                    </Button>
                </div>

                <div ref={videoList} className='flex flex-wrap justify-center'>
                    {
                        Object.keys(DB).map((token, index) => {
                            const data = DB[token] as VideoDBStructure

                            return (
                                <VCard activity={data.activity} key={index} icon={data.thumbnail} title={data.name} url={data.playlist}
                                    className='scale-75' />
                            )
                        })
                    }
                </div>
            </div>

            <Popup Open={popupOpen} Type='SETTINGSMENU' OpenerFunction={setPopupVisibility}
                className='flex flex-wrap items-center flex-col mt-6'
                Content={[
                    <Input onchange={OnCheck} type='CHECKBOX' key={1}>Active</Input>,
                    <Input onchange={OnCheck} type='CHECKBOX' key={2}>Semi-Active</Input>,
                    <Input onchange={OnCheck} type='CHECKBOX' key={3}>Retired</Input>
                ]} />

            <Footer />
        </Main>
    )
}