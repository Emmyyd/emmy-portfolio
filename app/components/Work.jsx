"use client"
import { Globe, LayoutGrid, Settings, ImageIcon } from "lucide-react"

const projects = [
 {
   icon: Globe,
   title: "DCakes E-Commerce",
   description: "A full-stack cake shop built with the MERN stack. Features product listings, a shopping cart, and an admin panel for managing products.",
   link: "https://dcakes-ecommerce.vercel.app/",
 },
 { icon: LayoutGrid, title: "Project 2", description: "Working on it...", link: null },
 { icon: Settings, title: "Project 3", description: "Working on it...", link: null },
 { icon: ImageIcon, title: "Project 4", description: "Working on it...", link: null },
]

export default function Work() {
 return (
   <section
     id="work"
     className="w-full px-[12%] py-20 scroll-mt-24 bg-white"
   >
     <div className="text-center mb-12">
       <span className="text-sm text-gray-500">My portfolio</span>
       <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
         My latest work
       </h2>
       <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
         Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
       </p>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       {projects.map((project, i) => (
         <div
           key={i}
           className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
         >
           <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-md mb-4">
             <project.icon className="w-5 h-5" />
           </div>

           <h3 className="font-semibold text-gray-900 mb-2">
             {project.title}
           </h3>

           <p className="text-sm text-gray-500 mb-4">
             {project.description}
           </p>

           {project.link ? (
             <a
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-sm text-pink-500 hover:underline"
             >
               View project →
             </a>
           ) : (
             <span className="text-sm text-gray-900 cursor-pointer hover:text-pink-500">
               View project →
             </span>
           )}
         </div>
       ))}
     </div>
   </section>
 )
}