"use client"

import { Globe, LayoutGrid, Settings, ImageIcon } from "lucide-react"

const services = [
  { icon: Globe, title: "Web design", description: "Web development is the process of building, programming..." },
  { icon: LayoutGrid, title: "Mobile app", description: "Mobile app development involves creating software for mobile devices..." },
  { icon: Settings, title: "UI/UX design", description: "UI/UX design focuses on creating a seamless user experience..." },
  { icon: ImageIcon, title: "Graphics design", description: "Creative design solutions to enhance visual communication..." },
]

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-24 bg-white"
    >
      {/* TITLE - CENTERED */}
      <div className="text-center mb-12">
        <span className="text-sm text-gray-500">What I offer</span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
          My Services
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            {/* ICON */}
            <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-md mb-4">
              <service.icon className="w-5 h-5" />
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>

            {/* TEXT */}
            <p className="text-sm text-gray-500 mb-4">
              {service.description}
            </p>

            {/* LINK */}
            <span className="text-sm text-gray-900 cursor-pointer hover:text-pink-500">
              Read more →
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}