import AppCard from '@/components/apps/AppCard'
import Filter from '@/components/universal/high_levels/Filter'
import Footer from '@/components/universal/high_levels/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import style from './page.module.scss'
import Header from '@/components/universal/high_levels/Header'

export default function Apps() {
   const options = [
      { value: 'starwars', label: 'Star Wars' },
      { value: 'marvel', label: 'Marvel' },
      { value: 'dc', label: 'DC' },
      { value: 'lotr', label: 'Lord of the Rings' },
   ]

   const filters = {
      Category: options,
      Genre: options,
      Platform: options,
      Mode: options,
   }

   return (
      <main>
         <Header imageUrl={'/test.jpg'} text="ha ha ha ha ha" />

         <section className={style.AppsSection}>
            <div className="d-flex align-items-start">
               <Filter filters={filters} />

               <Container fluid style={{ maxWidth: '690px' }}>
                  <h1 className="mb-3">My Apps</h1>

                  <Row>
                     <Col>
                        <AppCard />
                     </Col>
                  </Row>
               </Container>
            </div>
         </section>

         <Footer />
      </main>
   )
}
