import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import MediaBtn from '@/app/widgets/Button'

export default function Footer() {
    const icons = [faYoutube, faTwitter, faDiscord, faInstagram, faLink],
        links = ['lol', 'popo', 'oio', 'uio', 'lkj']

    return (
        <div className="Footer uppercase text-white">
            lolo

            <div className='p-2'>
                {
                    icons.map((icon, index) => {
                        return (
                            <MediaBtn key={index} className='m-2 text-2xl hover:text-emerald-500'>
                                <FontAwesomeIcon icon={icon} />
                            </MediaBtn>
                        )
                    })
                }
            </div>
        </div>
    )
}