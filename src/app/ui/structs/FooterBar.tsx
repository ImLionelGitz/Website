import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faInstagram, faTiktok, faDeviantart } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import structs from "@/app/styles/components/struct.module.scss"

export default function FooterBar() {
    const icons = [faYoutube, faTwitter, faTiktok, faInstagram, faDeviantart, faLink]
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
        <div className={structs.footer}>
            <div className='border-2 border-solid border-black w-3/4'>
                <h1>Find Us On</h1>

                <div className='overflow-hidden mb-3'>
                    {
                        icons.map((icon, index) => {
                            return (
                                <a key={index} href={links[index]} target='_blank'
                                    className='m-2 text-2xl hover:text-emerald-500 w-8 h-8 inline-block'
                                >
                                    <FontAwesomeIcon icon={icon} />
                                </a>
                            )
                        })
                    }
                </div>

                <p>© 2020 - {date.getFullYear()}. all rights reserved for logos & images. <br />
                    <span className='text-sm capitalize'>
                        <em>
                            templates & designs are <a target='_blank' className='hover:text-emerald-500' href={mySite}>open source</a>.
                        </em>
                    </span>
                </p>
            </div>
        </div>
    )
}