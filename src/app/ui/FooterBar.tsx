import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faInstagram, faTiktok, faDeviantart, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import MediaBtn from '@/app/widgets/Button'

export default function Footer({ className }: Footer) {
    const icons = [faYoutube, faTwitter, faTiktok, faInstagram, faDeviantart, faPatreon, faLink]
    const mySite = 'https://github.com/ImLionelGitz/My-Site'
    const date = new Date()
    const links = [
        'https://www.youtube.com/@LionelLeoPlayz',
        'https://twitter.com/LionelLeoGFX',
        'https://www.tiktok.com/@lionelleoplayz',
        'https://www.instagram.com/lionelleoplay.z',
        'https://www.deviantart.com/timmystudios',
        'https://www.patreon.com/LionelLeoPlayz',
        'https://www.roblox.com/groups/4708773/Liger'
    ]

    return (
        <div className={"Footer uppercase text-white" + ((className) ? ` ${className}` : '')}>
            © 2020 - {date.getFullYear()}. all rights reserved for logos & images. <br />
            <span className='text-base'>templates & designs are <MediaBtn target='_blank' className='hover:text-emerald-500' href={mySite}>open source</MediaBtn>.</span>

            <div className='p-2 overflow-hidden h-12'>
                {
                    icons.map((icon, index) => {
                        return (
                            <MediaBtn key={index} href={links[index]} target='_blank'
                            className='m-2 text-2xl hover:text-emerald-500 w-8 h-8 inline-block'
                            >
                                <FontAwesomeIcon icon={icon} />
                            </MediaBtn>
                        )
                    })
                }
            </div>
        </div>
    )
}