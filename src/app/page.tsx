'use client'

import Input from "./widgets/Gameslot"
import Main from "./widgets/Main"

export default function Home() {
  return (
    <Main>
      <Input icon="/logo.png" title="lololo" id="0" />
    </Main>
  )
}

addEventListener('game_slot_clicked', (e) => {
  const event = e as CustomEvent
  console.log(event.detail)
})