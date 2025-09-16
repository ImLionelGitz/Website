import uis from '@/app/styles/components/ui.module.scss'
import { useState } from 'react'


export default function VideoCard() {
    const [showUP, setShowUP] = useState("none")
    const styles: CSSVars = { "--anim": showUP }

    return (
        <div className={uis.videoCard} style={styles}>
            <iframe
                className="z-20 relative"
                onLoad={() => setShowUP("comeUp")}
                src="https://www.youtube.com/embed/1WF1Dx_OBYs?controls=0"></iframe>

            <h2 style={{ opacity: (showUP === "none") ? 0 : 1 }}>{"BREAKING 20 Roblox Rivals WORLD RECORDS In 24 HOURS.."}</h2>
        </div>
    )
}