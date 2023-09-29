import Image from "next/image";
import LightModeToggle from '@/app/widgets/Input'
import NavButton from '@/app/widgets/Button'
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { DOWN_SYMBOL, UP_SYMBOL } from "../helpers/variables";

export default function NavBar() {
    const MenuBtnHolder = useRef<HTMLUListElement>(null)
    const pages = ['games', 'videos', 'portfolio', 'contact']
    let pageOpened: string
    let DropdownOpen = false

    function DropdownClick(e: any) {
        if (MenuBtnHolder.current) {
            const btn = e.target as HTMLButtonElement,
            Dropdown = MenuBtnHolder.current

            if (!DropdownOpen) {
                btn.innerText = UP_SYMBOL
                Dropdown.classList.add('highten')
                DropdownOpen = true
            }

            else {
                btn.innerText = DOWN_SYMBOL
                Dropdown.classList.remove('highten')
                DropdownOpen = false
            }
        }
    }

    if (typeof window !== 'undefined') {
        pageOpened = window.location.pathname.split('/').slice(1)[0]
    }

    return (
        <div className="Navigation p-1">
            <a href="/">
                <Image alt="logo" src='/logo.png' width={200} height={200} />
            </a>

            <ul ref={MenuBtnHolder} className='uppercase mt-4 h-7 overflow-hidden'>
                <li className='hidden'>
                    <NavButton onclick={DropdownClick} className='text-white'>{DOWN_SYMBOL}</NavButton>
                </li>
                {
                    pages.map((page, index) => {
                        if (page == pageOpened) return (
                            <li key={index} className="active pointer-events-none text-emerald-500">
                                <NavButton href={`/${page}`}>{page}</NavButton>
                            </li>
                        )

                        return (
                            <li key={index}>
                                <NavButton href={`/${page}`} className='text-white hover:text-emerald-500'>{page}</NavButton>
                            </li>
                        )
                    })
                }
            </ul>

            <LightModeToggle className='m-3' type='TOGGLE'>
                <FontAwesomeIcon icon={faLightbulb} />
            </LightModeToggle>
        </div>
    )
}