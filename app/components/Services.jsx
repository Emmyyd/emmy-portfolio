import React from "react";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-24 text-center"
    >
      {/* SMALL TITLE */}
      <h4 className="text-sm text-gray-500 mb-2">
        What I offer
      </h4>

      {/* MAIN TITLE */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        My Services
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        Still working on that</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

  {/* CARD 1 */}
  <div className="border rounded-xl p-6 text-left transition duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-md mb-4">
      🌐
    </div>
    <h3 className="font-semibold text-lg mb-2">Working on it</h3>
    <p className="text-sm text-gray-500 mb-4">
      Loading...
    </p>
    <span className="text-sm text-gray-400">Please wait →</span>
  </div>

  {/* CARD 2 */}
  <div className="border rounded-xl p-6 text-left transition duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-md mb-4">
      📱
    </div>
    <h3 className="font-semibold text-lg mb-2">Working on it</h3>
    <p className="text-sm text-gray-500 mb-4">
      Loading...
    </p>
    <span className="text-sm text-gray-400">Please wait →</span>
  </div>

  {/* CARD 3 */}
  <div className="border rounded-xl p-6 text-left transition duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-md mb-4">
      🎨
    </div>
    <h3 className="font-semibold text-lg mb-2">Working on it</h3>
    <p className="text-sm text-gray-500 mb-4">
      Loading...
    </p>
    <span className="text-sm text-gray-400">Please wait →</span>
  </div>

  {/* CARD 4 */}
  <div className="border rounded-xl p-6 text-left transition duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-md mb-4">
      🖼️
    </div>
    <h3 className="font-semibold text-lg mb-2">Working on it</h3>
    <p className="text-sm text-gray-500 mb-4">
      Loading...
    </p>
    <span className="text-sm text-gray-400">Please wait →</span>
  </div>

</div>

    </section>
  );
}