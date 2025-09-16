'use client'

import ContentBar from "../ui/structs/apps/ContentBar";
import FooterBar from "../ui/structs/FooterBar";
import NavigationBar from "../ui/structs/NavBar";
import ThumbBar from "../ui/structs/home/ThmubBar";

export default function GamesPage() {
    return (
        <main>
            <NavigationBar />
            <ThumbBar thumbSrc={"/test.jpg"} />
            <ContentBar type="Apps" />
            <FooterBar />
        </main>
    )
}