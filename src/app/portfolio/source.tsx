'use client'

import Footer from '../ui/FooterBar'
import Image from 'next/image'
import NavBar from '../ui/NavBar'


export default function Portfolio() {
    return (
        <div className='overflow-x-hidden flex flex-col min-h-screen'>
            <NavBar />

            <div className='flex justify-center items-center flex-col text-2xl font-bold flex-1'
                style={{ background: 'var(--lower-color)' }}
            >
                <Image alt='Under Construction' priority width={500} height={500}
                    src={'https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408061_1280.png'}
                />
            </div>
            <Footer />
        </div>
    )
}