import React from 'react'
import Link from 'next/link'
import GithubIcon from '../svg/GithubSvg'
import LinkedInIcon from '../svg/LinkedInIcon'
import TelegramIcon from '../svg/TelegramIcon'
import EmailSvg from '../svg/EmailSvg'
import UserNameSvg from '../svg/UserNameSvg'

export default function Footer() {
  return (
    <div className="pt-5 pb-6 w-full bg-gray-700 ">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-xl text-gray-300">Contáctame</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col lg:justify-start items-start justify-center pl-20 pt-5">
            {/* <!-- fqltqn los iconos de los contactos --> */}
            <div className="flex space-x-2">
              <UserNameSvg />
              <h1>Briant Robert Mengana</h1>
            </div>
            <div className="flex space-x-2 pt-2">
              <EmailSvg />
              <h1>briantrobert89@gmail.com</h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center ml-20 sm:pl-14 mt-5">
            <h1>Redes sociales</h1>
            {/* <!-- faltan los boton links con los iconos github telegram y linkedIn--> */}
            <div className="flex mt-2 space-x-4">
              <Link
                className="hover:scale-110 transition-all ease-in-out duration-200"
                href={"/"}
              >
                <GithubIcon />
              </Link>
              <Link
                className="hover:scale-110 transition-all ease-in-out duration-200"
                href={"/"}
              >
                <LinkedInIcon />
              </Link>
              <Link
                className="hover:scale-110 transition-all ease-in-out duration-200"
                href={"/"}
              >
                <TelegramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
