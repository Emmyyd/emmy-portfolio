 "use client";
import { useState, useRef } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(formRef.current);
    formData.append("access_key", "9f44559a-9402-47a0-8fd1-1e3242304e8a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      formRef.current.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-24 bg-white"
    >
      <div className="text-center mb-12">
        <span className="text-sm text-gray-500">Connect with me</span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
          Get in touch
        </h2>
        <p className="text-gray-600 mt-2">
          I&apos;d love to hear from you!
        </p>
      </div>

      <form ref={formRef} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <textarea
          name="message"
          placeholder="Enter your message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
        />

        <div className="text-center">
          <button
            type="button"
            onClick={onSubmit}
            className="px-8 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition"
          >
            Submit now →
          </button>
          <p className="text-sm text-gray-500 mt-4">{result}</p>
        </div>
      </form>
    </section>
  );
}
