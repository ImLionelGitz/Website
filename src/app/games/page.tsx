'use client'

import dynamic from "next/dynamic"

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false }),
Footer = dynamic(() => import('@/app/ui/FooterBar'), { ssr: false }),
Main = dynamic(() => import('@/app/widgets/Main'), { ssr: false })

export default function Games() {
    return (
        <Main>
            <NavBar />

            <div>
                <h1>Games</h1>
                <p>lololol</p>

                
            </div>

            <Footer />
        </Main>
    )
}