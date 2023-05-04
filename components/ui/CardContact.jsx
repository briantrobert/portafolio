import React from 'react'
import Link from 'next/link'
import GithubIcon from '../svg/GithubSvg'
import LinkedInIcon from '../svg/LinkedInIcon'
import TelegramIcon from '../svg/TelegramIcon'
import EmailSvg from '../svg/EmailSvg'
import UserNameSvg from '../svg/UserNameSvg'

function CardContact() {
  return (
    <div className="w-full h-full lg:flex bg-gray-300">
      <div className="w-full lg:w-1/2 h-64">
     
      </div>
      <div className="lg:w-1/2 p-5">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, velit.
          Error aut enim magni corporis aliquid dignissimos voluptas ratione
          explicabo ex vero repellendus, inventore natus officia dolorum. Nobis,
          excepturi error!
        </h1>
        <div className="pt-2">
          <hr />
        </div>
        <div className="pt-3">
          <h1>Contactame</h1>
          <div className="flex space-x-3 pt-2">
            {/* <!-- faltan los boton links con los iconos github telegram y linkedIn--> */}
           
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
      <div></div>
    </div>
  );
}

export default CardContact