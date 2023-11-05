import Image from "next/image";

/**
 * Create a video card.
 * @param icon An icon for this card
 * @param title The video's title for display
 * @param url An url for this card
 * @param className Add classes to this card for additional styling (optional)
 */

export default function VCard({ icon, title, url, activity, className }: VCard) {
    return (
        <a href={url} target='_blank' className='VCard' activity-status={activity}>
            <div className={"container" + ' ' + ((className) ? className : '')}>
                <Image alt={title} src={icon} width={345} height={245} />
                <div className="Shadow"></div>
            </div>
            {title}
        </a>
    )
}