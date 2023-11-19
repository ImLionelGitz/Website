import Portfolio from "./source";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Portfolios - Liger',
    robots: { index: false, follow: false }
}

export default function Page() {
    return <div><Portfolio /></div>
}