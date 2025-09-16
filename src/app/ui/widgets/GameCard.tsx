import Image from "next/image";
import uis from "@/app/styles/components/ui.module.scss"
import { useState } from "react";


export default function GameCard() {
    const [showUP, setShowUP] = useState("none")
    const styles: CSSVars = {
        "--anim": showUP,
        opacity: (showUP === "none") ? 0 : 1
    }

    return (
        <div className={uis.gameCard} style={styles}>
            <Image
                alt="work logo"
                onLoad={() => setShowUP("comeUp")} 
                src='/logo2.png' 
                className="shadow-lg" 
                width={187} height={187} />

            <h2>Lionel Saga - Face Changer</h2>
        </div>
    )
}