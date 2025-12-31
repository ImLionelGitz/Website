import Banner from './Banner'
import HomeBar from './HomeBar'
import NavBar from './NavBar'

interface DaHeader {
   imageUrl: string
}

export default function Header(props: DaHeader) {
   const { imageUrl } = props

   return (
      <section style={{ overflowX: 'clip', position: 'relative', zIndex: '9' }}>
         <HomeBar />

         <div style={{ height: '40vw' }}>
            <Banner image={imageUrl} />
         </div>

         <NavBar />
      </section>
   )
}
