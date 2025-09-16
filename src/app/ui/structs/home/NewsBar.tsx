import NewsCard from "../../widgets/NewsCard";
import struct from "@/app/styles/components/struct.module.scss"

export default function NewsBar() {
    return (
        <div className={`${struct.newsBar} sectionTear`}>
            <h1>Latest News</h1>

            <div className="flex justify-center">
                {
                    [0, 1].map(lol => <NewsCard key={lol} newsType="Info" title="The quick brown fox jumps over the lazy dog." />)
                }
            </div>
        </div>
    )
}