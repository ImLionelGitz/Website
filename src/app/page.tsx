'use client'

import Main from "./widgets/Main"
import NavBar from "./ui/NavBar"
import Picture from "./ui/Picture"
import Footer from "./ui/FooterBar"

export default function Home() {
  return (
    <Main>
      <NavBar />
      <Picture />
      <Footer />
    </Main>
  )
}