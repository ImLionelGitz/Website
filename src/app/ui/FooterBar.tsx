import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import MediaBtn from '@/app/widgets/Button'

export default function Footer() {
    const icons = [faYoutube, faTwitter, faTiktok, faInstagram, faLink],
        links = ['lol', 'popo', 'oio', 'uio', 'lkj']
    const date = new Date()

    return (
        <div className="Footer uppercase text-white">
            © 2020 - {date.getFullYear()}. all rights reserved for logos & images. <br />
            <span className='text-base'>templates & designs are <MediaBtn className='hover:text-emerald-500' href="#">open source</MediaBtn>.</span>

            <div className='p-2'>
                {
                    icons.map((icon, index) => {
                        return (
                            <MediaBtn key={index} href={links[index]} className='m-2 text-2xl hover:text-emerald-500'>
                                <FontAwesomeIcon icon={icon} />
                            </MediaBtn>
                        )
                    })
                }
            </div>
        </div>
    )
}