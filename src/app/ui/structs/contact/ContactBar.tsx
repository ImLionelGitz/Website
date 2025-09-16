'use client';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import structs from "@/app/styles/components/struct.module.scss"
import DropDown from '@/app/ui/widgets/Dropdown';

export default function ContactBar() {
    const [form, setForm] = useState({
        name: '',
        type: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const options = [
        { value: "starwars", label: "Star Wars" },
        { value: "marvel", label: "Marvel" },
        { value: "dc", label: "DC" },
        { value: "lotr", label: "Lord of the Rings" },
    ];

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
        <div className="py-4 bg-[var(--body-color1)]">
            <div className="text-center">
                <h1 className="text-3xl mb-4 font-bold">Contact Us</h1>

                <div className="flex flex-col items-center">
                    <form className="space-y-4 max-w-md">
                        <input
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded"
                        />

                        <DropDown
                            label={null}
                            options={options}
                            value={""}
                            onChange={() => { }}
                            placeholder="Choose Franchise"
                        />

                        <input
                            name="discord"
                            placeholder="Your Discord Username"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full h-32 p-2 rounded"
                        />

                        <button className={`${structs.contactFormSend} z-20 relative`}
                            style={{ padding: "6px 12px" }}>Send</button>

                        <p>{status}</p>
                    </form>

                    <div className="flex flex-col items-center bg-[aliceblue] p-4 border-4 rounded-md border-[#047857]">
                        <h2 className='text-3xl mb-4 font-bold'>More ways to reach us</h2>

                        <div className="flex items-center">
                            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                            <p>LionelLeoPlayz@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
