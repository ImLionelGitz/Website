import Image from "next/image";

/**
 * Create a video card.
 * @param icon An icon for this card
 * @param title The video's title for display
 * @param url An url for this card
 * @param className Add classes to this card for additional styling (optional)
 */

export default function VCard({ icon, title, url, className }: VCard) {
    const _class = (className) ? className : ''

    return (
        <a href={url} className='VCard'>
            <div className={"container" + _class}>
                <Image alt={title} src={icon} width={345} height={245} />
                <div className="Shadow"></div>
            </div>
            {title}
        </a>
    )
}