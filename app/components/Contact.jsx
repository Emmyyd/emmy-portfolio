"use client"
import React, { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef()
  const [result, setResult] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setResult('Sending...')
    const formData = new FormData(formRef.current)
    formData.append('access_key', 'YOUR_WEB3FORMS_KEY')
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    if (data.success) {
      setResult('Message sent successfully!')
      formRef.current.reset()
    } else {
      setResult('Something went wrong. Try again.')
    }
  }

  return (
    <section id="contact" className="w-full px-[12%] py-20 scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-sm text-gray-500">Get in touch</span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
          Contact Me
        </h2>
      </div>
      <form ref={formRef} onSubmit={onSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input name="name" required placeholder="Your Name" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500" />
        <input name="email" type="email" required placeholder="Your Email" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500" />
        <textarea name="message" required rows={5} placeholder="Your Message" className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500" />
        <button type="submit" className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
          Send Message
        </button>
        {result && <p className="text-center text-sm text-gray-600">{result}</p>}
      </form>
    </section>
  )
}