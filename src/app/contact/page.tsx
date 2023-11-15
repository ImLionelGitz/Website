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
    const contacts: Record<string, any> = {
        'Discord': { info: 'kuzlivegang', bgcolor: '#6925d1', icon: faDiscord },
        'Telegram': { info: '@LionelLeoPlayz', bgcolor: '#229ED9', icon: faTelegram },
        'Skype': { info: 'live:.cid.83b9a465ed726c7e', bgcolor: '#00aff0', icon: faSkype },
        'E-Mail': { info: 'lionelleoplayz@gmail.com', bgcolor: '#e22638', icon: faEnvelope }
    }
    return (
        <Main className='overflow-x-hidden flex flex-col min-h-screen'>
            <NavBar />
            <Picture imgPath={Images.CONTACT} />

            <div className='flex justify-center items-center flex-col text-2xl font-bold flex-1'>
                {
                    Object.keys(contacts).map((token, index) => {
                        const contactInfo = contacts[token]
                        return (
                            <ContactSlot key={index} info={contactInfo.info} bgcolor={contactInfo.bgcolor} className='m-3'>
                                <FontAwesomeIcon icon={contactInfo.icon} className='mr-2 pointer-events-none' />
                                {token}
                            </ContactSlot>
                        )
                    })
                }
            </div>
            <Footer />
        </Main>
    )
}