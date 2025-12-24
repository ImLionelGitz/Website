import ContactForm from '@/components/contact/ContactForm'
import Footer from '@/components/universal/high_levels/Footer'
import Header from '@/components/universal/high_levels/Header'

export default function Contact() {
   return (
      <main>
         <Header imageUrl="/Contact.jpeg" text={''} />

         <ContactForm />

         <Footer />
      </main>
   )
}
