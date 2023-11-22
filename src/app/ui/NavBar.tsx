'use client'

import Image from "next/image";
import LightModeToggle from '@/app/widgets/Input'
import NavButton from '@/app/widgets/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { DOWN_SYMBOL, UP_SYMBOL } from "../helpers/variables";
import { useEffect, useState } from "react";

const pages = ['games', 'videos', 'portfolio', 'contact']

export default function NavBar() {
    const [onPage, setOnPage] = useState('')

    useEffect(() => {
        if (localStorage.getItem('ThemeColor')) {
            document.body.classList.replace('LightMode', 'DarkMode')
        }

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];

            if (window.location.pathname.includes(page)) {
                setOnPage(page)

                switch (page) {
                    case 'games':
                        document.body.style.setProperty('--arrow-position', '28%')
                        break
                    case 'videos':
                        document.body.style.setProperty('--arrow-position', '54%')
                        break
                    default: break
                }
    
                break
            }
        }
    }, [])

    function DropdownClick(e: any) {
        const btn = e.target as HTMLButtonElement
        const parent = btn.parentElement as HTMLLIElement
        const holder = parent.parentElement

        if (holder && holder.id === 'menuContainer') {
            if (!holder.classList.contains('highten')) {
                btn.innerText = UP_SYMBOL
                holder.classList.add('highten')
            }

            else {
                btn.innerText = DOWN_SYMBOL
                holder.classList.remove('highten')
            }
        }
    }

    function OnBulbClick() {
        if (typeof window !== 'undefined') {
            const root = document.body

            if (!root.classList.contains('DarkMode')) {
                root.classList.replace('LightMode', 'DarkMode')
                localStorage.setItem('ThemeColor', 'true')
            }

            else {
                root.classList.replace('DarkMode', 'LightMode')
                localStorage.removeItem('ThemeColor')
            }
        }
    }

    return (
        <div className="Navigation p-1">
            <a href="/">
                <Image alt="logo" src='logo' width={200} height={62} />
            </a>

            <ul id="menuContainer" className='uppercase mt-4 h-7'>
                <li className='hidden'>
                    <NavButton onclick={DropdownClick} className='text-white'>{DOWN_SYMBOL}</NavButton>
                </li>
                {
                    pages.map((page, index) => {
                        if (page === onPage) {
                            return (
                                <li key={index} className="active pointer-events-none text-emerald-500">
                                    <NavButton href={`/${page}`}>{page}</NavButton>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <NavButton href={`/${page}`} className='text-white hover:text-emerald-500'>{page}</NavButton>
                            </li>
                        )
                    })
                }
            </ul>

            <LightModeToggle onchange={OnBulbClick} className='m-3' type='TOGGLE'>
                <FontAwesomeIcon icon={faLightbulb} />
            </LightModeToggle>
        </div>
    )
}