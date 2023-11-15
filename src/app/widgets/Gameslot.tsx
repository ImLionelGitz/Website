import Image from "next/image";

export default function GSlot({ icon, title, platforms, links, onSlotClick, className }: GCard) {
    return (
        <button className={'GSlot' + ' ' + ((className) ? className : '')} onClick={() => onSlotClick(platforms, links)}>
            <Image alt={title} src={icon} width={250} height={345} />
            <h3>{title}</h3>
        </button>
    )
}