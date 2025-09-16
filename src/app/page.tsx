import NavBar from "./ui/structs/NavBar"
import ThumbBar from "./ui/structs/home/ThmubBar"
import WorksBar from "./ui/structs/home/WorksBar"
import NewsBar from "./ui/structs/home/NewsBar"
import ReviewsBar from "./ui/structs/home/ReviewsBar"
import Footer from "./ui/structs/FooterBar"


let PlatformsAvailable: Record<string, string> = {}

export default function Home() {
    return (
        <main>
            <NavBar />
            <ThumbBar homepage />
            <WorksBar />
            <NewsBar />
            <ReviewsBar />
            <Footer />
        </main>
    )
}