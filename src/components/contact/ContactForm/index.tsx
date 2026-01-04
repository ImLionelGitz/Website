'use client'

import Button from '@/components/universal/low_levels/Button'
import style from './index.module.scss'
import DropDown from '@/components/universal/low_levels/Dropdown'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { Botghost } from '@/helpers/enums'

type MergedElem = HTMLInputElement & HTMLTextAreaElement

export default function ContactForm() {
   const [form, setForm] = useState<contactData>({
      name: '',
      category: '',
      discord: '',
      message: '',
   })
   const [status, setStatus] = useState('')
   const [reveal, setShow] = useState(false)

   const category: dropdownOption[] = [
      {
         label: 'Goku',
         value: 'goku',
      },

      {
         label: 'Raditz',
         value: 'raditz',
      },
   ]

   const handleChange = (e: ChangeEvent<MergedElem>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
   }

   useEffect(() => {
      setTimeout(() => setShow(true), 350)
   }, [])

   const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setStatus('Sending...')

      const { name, category, discord } = form

      if (!name || !category || !discord) {
         setStatus('Complete the form!')
         return
      }

      try {
         const res = await fetch('https://corsproxy.io/?url=' + Botghost.URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: Botghost.KEY,
            },
            body: JSON.stringify(form),
         })

         if (res.ok) {
            setStatus('Message sent!')
            setForm({
               name: '',
               discord: '',
               message: '',
               category: '',
            })
         }
      } catch (err) {
         setStatus(`Failed to send message. \n ${err}`)
      }
   }

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
                  onChange={handleChange}
                  required
               />

               <DropDown
                  options={category}
                  display={form.category}
                  color="black"
                  noAll
                  onChange={(option) => {
                     setForm({ ...form, category: option })
                  }}
               />

               <input
                  name="discord"
                  placeholder="Your Discord Username"
                  value={form.discord}
                  onChange={handleChange}
                  required
               />

               <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
               />

               <div>
                  <Button text="Send" onClick={handleSubmit} />
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
