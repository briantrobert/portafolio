import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Navbar({children}) {
  return (
    <nav className="sticky z-20 top-0 flex justify-between bg-white/10 backdrop-blur-sm py-2">
        <div className="flex items-center lg:ml-28 ml-5">
          <motion.h1
            className="text-lg font-bold font-sans"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <span className="text-gray-200">Hello </span>
            <span className="text-orange-500">World</span>
          </motion.h1>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block space-x-10">
            <motion.ul
              className="flex justify-items-start space-x-5"
              initial={{ x: 550 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <li className="py-1 px-2 text-lg text-gray-200 hover:bg-slate-200 hover:shadow-2xl  hover:text-gray-700 active:bg-slate-700 active:text-gray-200 transition-all ease-in-out duration-150 font-semibold rounded-lg">
                <Link href="/">
                  <span>Inicio</span>
                </Link>
              </li>
              <li className="py-1 px-2 text-lg text-gray-200 hover:bg-slate-200 hover:shadow-2xl  hover:text-gray-700 active:bg-slate-700 active:text-gray-200 transition-all ease-in-out duration-150 font-semibold rounded-lg">
                <Link href="#portfolio">
                  <span>Portafolio</span>
                </Link>
              </li>
              <li className="py-1 px-2 text-lg text-gray-200 hover:bg-slate-200 hover:shadow-2xl hover:text-gray-700 active:bg-slate-700 active:text-gray-200 transition-all ease-in-out duration-150 font-semibold rounded-lg">
                <Link href="#skillsets">
                  <span>Habilidades</span>
                </Link>
              </li>
              <li>
                <button className="border text-gray-200 border-gray-200 hover:border-gray-800 py-1 px-1 rounded-lg mr-5 text-lg shadow-xl font-semibold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
                  Resume
                </button>
              </li>
            </motion.ul>
          </div>
        </div>
          {children}
      </nav>
  )
}

export default Navbar