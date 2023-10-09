'use client'

import dynamic from 'next/dynamic'
import Main from '../widgets/Main'
import Footer from '../ui/FooterBar'
import Image from 'next/image'

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })


export default function Portfolio() {
    return (
        <Main className='overflow-x-hidden flex flex-col min-h-screen'>
            <NavBar />

            <div className='flex justify-center items-center flex-col text-2xl font-bold flex-1'>
                <Image alt='Under Construction'
                src={'https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408061_1280.png'}
                width={500} height={500} />
            </div>
            <Footer />
        </Main>
    )
}