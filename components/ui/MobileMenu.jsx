import React from 'react'
import Link from 'next/link'

function MobileMenu() {
  return (
    <div
          className="absolute rounded-md bg-gray-500 top-10 right-5 h-64 w-7/12"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>

            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>

            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>

            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </Link>
          </div>
        </div>
  )
}

export default MobileMenu