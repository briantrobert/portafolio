import React from 'react'
import Link from 'next/link'

function MobileMenu({onClose}) {

  return (
    <div className="absolute rounded-md bg-gray-300 top-11 right-5 w-7/12" id="mobile-menu">
          <div className="px-2 pt-2 pb-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link
              href="/"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
              onClick={() => onClose()}
            >
              Inicio
            </Link>

            <Link
              href="#portfolio"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
              onClick={() => onClose()}
            >
              Portafolio
            </Link>

            <Link
              href="#skillsets"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
              onClick={() => onClose()}
            >
              Habilidades
            </Link>
          </div>
        </div>
  )
}

export default MobileMenu