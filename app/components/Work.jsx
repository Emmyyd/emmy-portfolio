import React from "react";

const Work = () => {
  return (
    <section id="work" className="w-full py-20 scroll-mt-24">
      
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h4 className="text-sm text-gray-500 mb-2">
            MY PORTFOLIO
          </h4>

          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            My Latest Work
          </h2>

          <p className="text-gray-600">
            Still working on that...
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="group border rounded-xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl mb-4 flex justify-center">🌐</div>
            <h3 className="font-semibold mb-2">Working on it</h3>
            <p className="text-sm text-gray-500 mb-3">Loading...</p>
            <span className="text-xs text-gray-400">Please wait →</span>
          </div>

          <div className="group border rounded-xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl mb-4 flex justify-center">📱</div>
            <h3 className="font-semibold mb-2">Working on it</h3>
            <p className="text-sm text-gray-500 mb-3">Loading...</p>
            <span className="text-xs text-gray-400">Please wait →</span>
          </div>

          <div className="group border rounded-xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl mb-4 flex justify-center">🎨</div>
            <h3 className="font-semibold mb-2">Working on it</h3>
            <p className="text-sm text-gray-500 mb-3">Loading...</p>
            <span className="text-xs text-gray-400">Please wait →</span>
          </div>

          <div className="group border rounded-xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl mb-4 flex justify-center">🖼️</div>
            <h3 className="font-semibold mb-2">Working on it</h3>
            <p className="text-sm text-gray-500 mb-3">Loading...</p>
            <span className="text-xs text-gray-400">Please wait →</span>
          </div>

        </div>

    <div className="flex justify-center mt-16 mb-10">
  <button className="border border-gray-400 px-8 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-300">
    Show more →
  </button>
</div>
      </div>

    </section>
  );
};

export default Work;