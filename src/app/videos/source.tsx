'use client'

import dynamic from "next/dynamic"
import Picture from "../ui/Picture"
import Button from "../widgets/Button"
import Footer from "../ui/FooterBar"
import VCard from "../widgets/Videocard"
import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import Input from "../widgets/Input"
import { VideoDB } from "../helpers/variables"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })

let previousChkBox: HTMLInputElement

export default function Videos() {
    const [Videos, setVideos] = useState<Record<string, any>>()
    const [PopupUI, setPopupUI] = useState<JSX.Element>()
    const listRef = useRef<HTMLDivElement>(null)
    const inputs = [
        <Input onchange={OnCheck} type='CHECKBOX' key={1}>Active</Input>,
        <Input onchange={OnCheck} type='CHECKBOX' key={2}>Semi-Active</Input>,
        <Input onchange={OnCheck} type='CHECKBOX' key={3}>Retired</Input>
    ]

    useEffect(() => {
        fetch(VideoDB).then(response => response.json()).then(data => {
            setVideos(data)
        })
    }, [])

    function OnClick() {
        if (!PopupUI) {
            const Popup = dynamic(() => import('@/app/ui/Popup'), { ssr: false })
            setPopupUI(<Popup Type='SETTINGSMENU' Content={inputs} onClose={CloseModal}
                className='flex flex-wrap items-center flex-col mt-6' />)
        }

        else dispatchEvent(new Event('open_modal'))
    }

    function CloseModal(e: any) {
        const Element = e.target as HTMLElement

        if (Element.classList.contains('Popup')) {
            dispatchEvent(new Event('close_modal'))
        }
    }

    function OnCheck(source: CheckedDataReturnType) {
        if (listRef.current) {
            const list = listRef.current;
            if (previousChkBox && source.box !== previousChkBox) previousChkBox.checked = false;

            for (let i = 0; i < list.childNodes.length; i++) {
                const element = list.childNodes[i] as HTMLAnchorElement;
                const elementAttr = element.getAttribute('activity-status');
                const shouldBeHidden = elementAttr !== source.source && source.value;

                element.style.display = shouldBeHidden ? 'none' : 'block';
            }

            previousChkBox = source.box;
        }
    }

    if (Videos) return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <Picture imgPath='video' className='h-96' />

            <div className='text-center text-2xl font-bold' style={{ background: 'var(--lower-color)' }}>
                <div className='pt-3'>
                    <h1 className="inline">Videos</h1>
                    <Button onclick={OnClick} className="absolute right-0 mr-4">
                        <FontAwesomeIcon icon={faFilter} />
                    </Button>
                </div>

                <div ref={listRef} className='flex flex-wrap justify-center'>
                    {
                        Object.keys(Videos).map((token, index) => {
                            const data = Videos[token] as VideoDBStructure

                            return (
                                <VCard activity={data.activity} key={index} icon={data.thumbnail} title={data.name} url={data.playlist}
                                    className='scale-75' />
                            )
                        })
                    }
                </div>
            </div>
            {PopupUI && PopupUI}
            <Footer />
        </div>
    )
}