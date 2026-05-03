import React, { useState } from "react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "7cbf707d-6dcd-4963-994f-5a8dcb2a0d3a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="w-full py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h4 className="text-sm text-gray-500 mb-2">
          Connect with me
        </h4>

        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Get in touch
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          I'd love to hear from you!
        </p>

        <form onSubmit={onSubmit} className="space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3" />

            <input type="email" name="email" placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3" />
          </div>

          <textarea name="message" rows="6" placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-md px-4 py-3"></textarea>

          <div className="flex flex-col items-center gap-4">
            <button type="submit"
              className="bg-black text-white px-8 py-3 rounded-full">
              Submit now →
            </button>

            {/* RESULT MESSAGE */}
            <p className="text-sm text-gray-600">{result}</p>
          </div>

        </form>

      </div>
    </section>
  );
};

export default Contact;