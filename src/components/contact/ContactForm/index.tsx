'use client'

import Button from '@/components/universal/low_levels/Button'
import style from './index.module.scss'
import DropDown from '@/components/universal/low_levels/Dropdown'
import { useEffect, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function ContactForm() {
   const [form, setForm] = useState({
      name: '',
      type: '',
      email: '',
      message: '',
   })
   const [status, setStatus] = useState('')
   const [reveal, setShow] = useState(false)

   // const handleChange = (_) => {
   //    setForm({ ...form, [e.target.name]: e.target.value })
   // }

   useEffect(() => {
      setTimeout(() => setShow(true), 350)
   }, [])

   // const handleSubmit = async (e) => {
   //     e.preventDefault();
   //     setStatus('Sending...');

   //     const res = await fetch('/api/contact', {
   //         method: 'POST',
   //         headers: { 'Content-Type': 'application/json' },
   //         body: JSON.stringify(form),
   //     });

   //     if (res.ok) {
   //         setStatus('Message sent!');
   //         setForm({ name: '', email: '', message: '' });
   //     } else {
   //         setStatus('Failed to send message.');
   //     }
   // };

   return (
      <div
         className={`${style.ContactBlock} not-loaded ${reveal ? 'loaded' : ''}`}
      >
         <div className={style.ContactForm}>
            <h1 className="fw-bold mb-3">Contact Me</h1>

            <form className={style.Inputs}>
               <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  //onChange={handleChange}
                  required
               />

               <DropDown
                  label={''}
                  options={[]}
                  display={''}
                  color="black"
                  onChange={function (option: string): void {
                     throw new Error('Function not implemented.')
                  }}
               />

               <input
                  name="discord"
                  placeholder="Your Discord Username"
                  value={form.email}
                  //onChange={handleChange}
                  required
               />

               <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  //onChange={handleChange}
                  required
               />

               <div>
                  <Button text="Send" />
               </div>

               <p>{status}</p>
            </form>

            <div>
               <h2>More ways to reach me</h2>

               <div>
                  <FaEnvelope />
                  <p>contact@ligercreations.com</p>
               </div>
            </div>
         </div>
      </div>
   )
}
