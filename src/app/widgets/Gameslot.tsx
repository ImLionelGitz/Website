import Image from "next/image";

/**
 * Create a game card.
 * @param icon An icon for this card
 * @param title The game's title for display
 * @param id An unique identifier for this card
 * @param className Add classes to this card for additional styling (optional)
 * @emits CustomEvent called `game_slot_clicked` with a `gameTitle` and a `gameID`
 */

export default function GSlot({ icon, title, id, className }: GCard) {
    const _class = (className) ? ` ${className}` : ''

    function OnSlotClick() {
        const gslot = new CustomEvent('game_slot_clicked', { detail: { gameTitle: title, gameID: id } })
        window.dispatchEvent(gslot)
    }

    return (
        <button className={'GSlot' + _class} id={id} onClick={OnSlotClick}>
            <Image alt={title} src={icon} width={250} height={345} />
            <h3>{title}</h3>
        </button>
    )
}