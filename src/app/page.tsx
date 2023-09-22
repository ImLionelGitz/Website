'use client'

import Input from "./widgets/Gameslot"

export default function Home() {
  return (
    <main className="flex">
      <Input />
    </main>
  )
}

function lol(e: MouseEvent) {
  console.log(e.target)
}