import Videos from "./source";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Videos - Liger',
    description: 'List of my video that were uploaded to Youtube (LionelLeoPlayz).',
}

export default function Page() {
    return <div><Videos /></div>
}