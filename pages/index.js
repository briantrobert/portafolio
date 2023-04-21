import { useState } from 'react'
import Link from 'next/link'
import CssSvg from '../components/svg/CssSvg'
import GithubIcon from '../components/svg/GithubSvg'
import HtmlSvg from '../components/svg/HtmlSvg'
import JavaScriptSvg from '../components/svg/JavaScriptSvg'
import LinkedInIcon from '../components/svg/LinkedInIcon'
import NextjsSvg from '../components/svg/NextjsSvg'
import ReactjsSvg from '../components/svg/ReactjsSvg'
import TailwindcssSvg from '../components/svg/TailwindCssSvg'
import TelegramIcon from '../components/svg/TelegramIcon'
import EmailSvg from '../components/svg/EmailSvg'
import PhoneSvg from '../components/svg/PhoneSvg'
import UserNameSvg from '../components/svg/UserNameSvg'
import { motion } from 'framer-motion'

export default function Home() {

  const [movileMenu,setMovileMenu] = useState(true);

  
  const openMovileMenu = () => {
    setMovileMenu(!movileMenu)
    
  }

  return (
    <>
      {/* navbar section */}
      <nav className="sticky top-0 z-30 flex justify-between bg-white/10 backdrop-blur-sm py-2">
        <div className="flex items-center lg:ml-28 ml-5">
          <motion.h1 className="text-lg font-bold font-sans"
           initial={{y: -250}}
           animate={{y: 0}}
           transition={{ delay: 0.2, type: 'spring', stiffness: 120}}
           ><span className='text-gray-200'>Hello </span><span className='text-orange-500'>World</span>
           </motion.h1>
        </div>
        <div className="flex items-center space-x-10">
        <div className="hidden md:block space-x-10">
          <ul className="flex justify-items-start space-x-5">
            <li className="py-1 px-2 text-lg text-gray-200 hover:bg-slate-200 hover:shadow-2xl  hover:text-cyan-500 active:bg-slate-700 transition-all ease-in-out duration-150 font-semibold rounded-2xl">
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li className="py-1 px-2 text-lg text-gray-200 hover:bg-slate-200 hover:shadow-2xl  hover:text-cyan-500 active:bg-slate-700 transition-all ease-in-out duration-150 font-semibold rounded-2xl">
              <Link href="/">
                <span>Portafolio</span>
              </Link>
            </li>
            <li className="py-1 px-2 text-lg text-gray-200 hover:bg-slate-200 hover:shadow-2xl hover:text-cyan-500 active:bg-slate-700 transition-all ease-in-out duration-150 font-semibold rounded-2xl">
              <Link href="/">
                <span>Habilidades</span>
              </Link>
            </li>
            <li>
              <button className="border text-gray-200 border-gray-200 hover:border-gray-800 py-1 px-1 rounded-lg mr-5 text-lg shadow-xl font-semibold hover:text-gray-800 hover:bg-orange-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
                Resume
              </button>
            </li>
          </ul>
        </div>
        <div className="lg:pr-0 pr-5">
        <button type="button" onClick={openMovileMenu} className="block md:hidden items-center py-1 px-1 justify-center rounded-md text-gray-300 hover:bg-orange-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/* <!--Icon when menu is closed. Heroicon name: outline/bars-3 Menu open: "hidden", Menu closed: "block" --> */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* <!--Icon when menu is open. Heroicon name: outline/x-mark Menu open: "block", Menu closed: "hidden" --> */}
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        </div>
      </nav>
      {/* <!-- landing page view section--> */}
      <div className="flex h-screen w-full bg-gray-900">
        <motion.div className="flex w-full h-full lg:w-1/2 items-center justify-center"
         initial={{ x: '-100vw'}}
         animate={{x: 0 }}
         transition={{ delay: 0.2, type: 'spring', stiffness: 100}}
         >
          <div className="lg:pl-24 pl-5 pr-5 rounded-lg m-6">
            <h1 className="font-bold text-gray-200 text-3xl">I'm a Front-end Web Developer</h1>
            <h1 className="text-sm mt-2 text-gray-200">
              Welcome, thank you to coming this far, please stay
            </h1>
            <h1 className="mt-2 text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              enim ipsum nostrum tempore aut dolorum deserunt placeat eligendi
              odio iure ut suscipit corporis necessitatibus assumenda dicta,
              commodi voluptatem ipsa. Dolorum!
            </h1>
            
            <Link href="/">
            <button className="mt-3 bg-orange-500 text-md font-semibold shadow-2xl py-2 px-1 rounded-xl hover:scale-110 transition-all ease-in-out duration-200 active:scale-100">
              Acerca de mi
            </button>

            </Link>
          </div>
        </motion.div>
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img className="md:p-15 mr-28 p-20 " src="/img/landing.png" alt="" />
        </div>
      </div>

      {/* <!-- Portafolio view section--> */}
      <div className='pt-5 pb-5 bg-gray-600'>

      <div className="flex items-center justify-center">
        <h1 className="font-bold text-3xl text-gray-300">Portafolio</h1>
      </div>
      <div className="flex items-start flex-col justify-start mt-10 lg:mt-20">
        <div className="lg:flex pl-8 pr-8 pb-4">
          <div className="bg-gray-500 w-full lg:w-1/2 flex items-center justify-center">
            hello image
          </div>
          <div className="lg:w-1/2 pl-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              quas dolor nulla reprehenderit officiis tempore repellat, fugiat,
              aliquam molestiae cupiditate exercitationem libero obcaecati
              tempora, hic iste. Eos, ipsa consequatur. Repellendus.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse mt-16 pl-8 pr-8 pb-4">
          <div className="bg-gray-500 w-full lg:w-1/2 flex items-center justify-center">
            <h1>hello image</h1>
          </div>
          <div className="lg:w-1/2 mt-2 pl-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              quas dolor nulla reprehenderit officiis tempore repellat, fugiat,
              aliquam molestiae cupiditate exercitationem libero obcaecati
              tempora, hic iste. Eos, ipsa consequatur. Repellendus.
            </p>
          </div>
        </div>
        <div className="lg:flex pl-8 pr-8 mt-16 pb-4">
          <div className="bg-gray-500 w-full lg:w-1/2 flex items-center justify-center">
            hello image
          </div>
          <div className="lg:w-1/2 pl-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              quas dolor nulla reprehenderit officiis tempore repellat, fugiat,
              aliquam molestiae cupiditate exercitationem libero obcaecati
              tempora, hic iste. Eos, ipsa consequatur. Repellendus.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse mt-16 pl-8 pr-8 pb-4">
          <div className="bg-gray-500 w-full lg:w-1/2 flex items-center justify-center">
            hello image
          </div>
          <div className="lg:w-1/2 pl-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              quas dolor nulla reprehenderit officiis tempore repellat, fugiat,
              aliquam molestiae cupiditate exercitationem libero obcaecati
              tempora, hic iste. Eos, ipsa consequatur. Repellendus.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Skillset section */}
      <div className='pt-5 pb-12 bg-gray-900'>
        <div className="flex items-center pt-5 justify-center">
          <h1 className="font-bold text-3xl text-gray-300">Habilidades</h1>
        </div>
        <div className='grid grid-cols-2 lg:flex w-full items-center justify-center'>
          <div className="grid lg:flex lg:space-x-36 mt-8 mb-8 w-full items-center justify-center">
            <div className='pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse'>
               <HtmlSvg />
            </div>
            <div className='pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse'>
              <CssSvg />
            </div>
            <div className='pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse'>
              <JavaScriptSvg />
            </div>
          </div>
          <div className="grid lg:flex lg:space-x-36 w-full items-center justify-center">
            <div className='pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse'>
              <TailwindcssSvg />
            </div>
            <div className='pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse'>
              <ReactjsSvg />
            </div>
            <div className='pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse'>
              <NextjsSvg />
            </div>
          </div>
        </div>
      </div>

      {/* footer section*/}
      <div className='pt-5 pb-5 w-full bg-gray-700 '>
      <div className="flex items-center justify-center">
          <h1 className="font-bold text-xl text-gray-300">Contáctame</h1>
        </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col lg:justify-start items-start justify-center pl-20 pt-5">
          {/* <!-- fqltqn los iconos de los contactos --> */}
          <div className='flex space-x-2'>
            <UserNameSvg /><h1>Briant Robert Mengana</h1>
          </div>
          <div className='flex space-x-2'>
            <PhoneSvg /><h1>+53 58815976</h1>
          </div>
          <div className='flex space-x-2'>
          <EmailSvg /><h1>briantrobert89@gmail.com</h1>
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
    </>
  );
}
