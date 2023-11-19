import Contact from "./source";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Want More Info? - Liger',
    robots: { index: false, follow: false }
}

export default function Page() {
    return <div><Contact /></div>
}