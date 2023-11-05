'use client'

import dynamic from 'next/dynamic'
import Main from '../widgets/Main'
import Picture from '../ui/Picture'
import Footer from '../ui/FooterBar'
import ContactSlot from '../widgets/ContactSlot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Images } from '../helpers/variables'

const NavBar = dynamic(() => import('@/app/ui/NavBar'), { ssr: false })


export default function Contact() {
    return (
        <Main className='overflow-x-hidden flex flex-col min-h-screen'>
            <NavBar />
            <Picture imgPath={Images.CONTACT} />

            <div className='flex justify-center items-center flex-col text-2xl font-bold flex-1'>
                <ContactSlot info='kuzlivegang' bgcolor={'#6925d1'} className='m-3'>
                    <FontAwesomeIcon icon={faDiscord} className='mr-2' />
                    Discord
                </ContactSlot>

                <ContactSlot info='@LionelLeoPlayz' bgcolor={'#229ED9'} className='m-3'>
                    <FontAwesomeIcon icon={faTelegram} className='mr-2' />
                    Telegram
                </ContactSlot>

                <ContactSlot info='live:.cid.83b9a465ed726c7e' bgcolor={'#00aff0'} className='m-3'>
                    <FontAwesomeIcon icon={faSkype} className='mr-2' />
                    Skype
                </ContactSlot>

                <ContactSlot info='lionelleoplayz@gmail.com' bgcolor={'#e22638'} className='m-3'>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                    E-Mail
                </ContactSlot>
            </div>
            <Footer />
        </Main>
    )
}