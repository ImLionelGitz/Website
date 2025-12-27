import Banner from './Banner'
import HomeBar from './HomeBar'
import NavBar from './NavBar'

interface DaHeader {
   imageUrl: string
   text: string
}

export default function Header(props: DaHeader) {
   const { imageUrl, text } = props

   return (
      <section style={{ overflowX: 'clip', position: 'relative', zIndex: '9' }}>
         <HomeBar />

         <div style={{ height: '40vw' }}>
            <Banner image={imageUrl} content={text} />
         </div>

         <NavBar />
      </section>
   )
}
