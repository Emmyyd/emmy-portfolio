"use client"

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-24 bg-white"
    >
      {/* TITLE - CENTERED */}
      <div className="text-center mb-12">
        <span className="text-sm text-gray-500">Connect with me</span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
          Get in touch
        </h2>
        <p className="text-gray-600 mt-2">I&apos;d love to hear from you!</p>
      </div>

      {/* FORM */}
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <textarea
          placeholder="Enter your message"
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition"
          >
            Submit now →
          </button>
        </div>
      </form>
    </section>
  )
}