'use client'

import Image from "next/image";
import LightModeToggle from '@/app/widgets/Input'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { DOWN_SYMBOL, UP_SYMBOL } from "../helpers/variables";
import { useEffect, useState } from "react";
import Link from "next/link";

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
            <a href="/" style={{ minWidth: '200px', minHeight: '62px' }}>
                <Image alt="logo" src='logo' width={200} height={62} />
            </a>

            <ul id="menuContainer" className='uppercase mt-4 h-7'>
                <li className='hidden'>
                    <button onClick={DropdownClick} className='text-white'>{DOWN_SYMBOL}</button>
                </li>
                {
                    pages.map((page, index) => {
                        if (page === onPage) {
                            return (
                                <li key={index} className="active pointer-events-none text-emerald-500">
                                    <Link href={`/${page}`}>{page}</Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={`/${page}`} className='text-white hover:text-emerald-500'>{page}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            <LightModeToggle onchange={OnBulbClick} className='m-3' type='TOGGLE'>
                <FontAwesomeIcon icon={faLightbulb} />
            </LightModeToggle>

            <style>{`.ToggleBox {display: block;position: absolute;top: 0;right: 0;cursor: pointer;font-size: 22px;user-select: none;}.ToggleBox input {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}.ToggleBox .toggle {color: var(--bulb-color);}
            `}</style>
        </div>
    )
}