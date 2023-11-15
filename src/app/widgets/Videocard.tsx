import Image from "next/image";

export default function VCard({ icon, title, url, activity, className }: VCard) {
    return (
        <a href={url} target='_blank' className='VCard' activity-status={activity}>
            <div className={"container" + ((className) ? ` ${className}` : '')}>
                <Image alt={title} src={icon} width={345} height={245} />
                <div className="Shadow"></div>
            </div>
            {title}
        </a>
    )
}