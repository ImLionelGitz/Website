import Image from "next/image";

/**
 * Create a game card.
 * @param icon An icon for this card
 * @param title The game's title for display
 * @param platforms Add platforms where this game is available on
 * @param links Add links that redirects to this game
 * @param className Add classes to this card for additional styling (optional)
 * @emits CustomEvent called `game_slot_clicked` with a `gameTitle` and a `gameID`
 */

export default function GSlot({ icon, title, platforms, links, className }: GCard) {
    function OnSlotClick() {
        const gslot = new CustomEvent('game_slot_clicked', { detail: {available: platforms, urls: links} })
        window.dispatchEvent(gslot)
    }

    return (
        <button className={'GSlot' + ' ' + className} onClick={OnSlotClick}>
            <Image alt={title} src={icon} width={250} height={345} />
            <h3>{title}</h3>
        </button>
    )
}