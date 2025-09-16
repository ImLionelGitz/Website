import WorkCard from "../../widgets/WorkCard";
import struct from "@/app/styles/components/struct.module.scss"

export default function WorksBar() {
    return (
        <div className={`${struct.workBar} sectionTear`}>
            <h1>Our Works</h1>

            <div className="flex justify-center">
                {
                    [0, 1, 2].map(lol => <WorkCard key={lol} workType="Games" description="The quick brown fox jumps over the lazy dog." />)
                }
            </div>
        </div>
    )
}