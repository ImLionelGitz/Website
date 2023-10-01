import Image from "next/image";

/**
 * Create a portfolio card.
 * @param icon An icon for this card
 * @param url An url for this card
 * @param className Add classes to this card for additional styling (optional)
 */

export default function PortfolioCard({ icon, url, className }: PFOCard) {
    const _class = (className) ? ` ${className}` : ''

    return (
        <a href={url} className='PFOCard'>
            <Image alt='Portfolio' src={icon} width={345} height={245} />
            <div className="Shadow"></div>
        </a>
    )
}