import Games from "./source";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Games - Liger',
    description: "Check out some awesome games on platforms like Roblox, Itch.io, etc! Crafted by yours truly—'LionelLeoPlayz'."
}

export default function Page() {
    return <div><Games /></div>
}