import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function HeroSection({setShowModal}) {
  return (
    <div className="flex h-screen w-full bg-gray-900">
        <motion.div
          className="flex w-full h-full lg:w-1/2 items-center justify-center"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
        >
          <div className="lg:pl-24 pl-5 pr-5 rounded-lg m-6">
            <h1 className="font-bold text-gray-200 text-3xl">
              {/* I'm a Front-end Web Developer :en Ingles*/}
              Soy un Front-end Web Developer
            </h1>
            <h1 className="text-sm mt-2 text-gray-200">
              {/* Welcome, thank you to coming this far, please stay */}
              Bienvenido, gracias por llegar hasta acá, le invito a continuar
            </h1>
            <h1 className="mt-2 text-lg text-gray-200">
              Desarrollador web con más de 5 años de
              experiencia laboral brindando soluciones a problemas
              complejos con exactitud y eficacia.
            </h1>

            <Link href="/">
              <button
                className="mt-3 bg-orange-500 
                text-md font-semibold shadow-2xl py-2 px-1 rounded-xl 
                hover:scale-110 transition-all 
                ease-in-out duration-200 active:scale-100"
                onClick={() => setShowModal(true)}
              >
                Acerca de mi
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img className="md:p-15 mr-28 p-20 " src="/img/landing.png" alt="" />
        </div>
      </div>
  )
}

export default HeroSection