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
  return (
    <>
      {/* navbar section */}
      <nav className="sticky top-0 z-30 flex justify-between bg-white/30 backdrop-blur-sm py-2">
        <div className="flex items-center ml-28">
          <h1 className="text-lg font-bold font-sans">Briant Robert Mengana</h1>
        </div>
        <div>
          <ul className="flex space-x-14 items-center mr-20">
            <li className="py-1 px-2 text-lg hover:bg-slate-200 hover:shadow-2xl  hover:text-cyan-500 active:bg-slate-700 transition-all ease-in-out duration-150 font-semibold rounded-2xl">
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li className="py-1 px-2 text-lg hover:bg-slate-200 hover:shadow-2xl  hover:text-cyan-500 active:bg-slate-700 transition-all ease-in-out duration-150 font-semibold rounded-2xl">
              <Link href="/">
                <span>Portafolio</span>
              </Link>
            </li>
            <li className="py-1 px-2 text-lg hover:bg-slate-200 hover:shadow-2xl hover:text-cyan-500 active:bg-slate-700 transition-all ease-in-out duration-150 font-semibold rounded-2xl">
              <Link href="/">
                <span>Habilidades</span>
              </Link>
            </li>
            <li>
              <button className="border border-gray-200 py-1 px-1 rounded-lg mr-5 text-lg shadow-xl font-semibold hover:text-cyan-500 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150">
                Sing in
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- landing page view section--> */}
      <div className="flex h-screen w-full">
        <motion.div className="flex w-full h-full lg:w-1/2 items-center justify-center"
         initial={{ x: '-100vw'}}
         animate={{x: 0 }}
         >
          <div className="pl-24 pr-5 rounded-lg m-6">
            <h1 className="font-bold text-3xl">I'm a Front-end Web Developer</h1>
            <h1 className="text-sm mt-2">
              Welcome, thank you to coming this far, please stay
            </h1>
            <h1 className="mt-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              enim ipsum nostrum tempore aut dolorum deserunt placeat eligendi
              odio iure ut suscipit corporis necessitatibus assumenda dicta,
              commodi voluptatem ipsa. Dolorum!
            </h1>
            
            <Link href="/">
            <button class="mt-3 bg-gradient-to-tr from-pink-700 to-blue-300 border-gray-300 text-md font-semibold shadow-2xl py-2 border px-1 rounded-xl hover:scale-110 transition-all ease-in-out duration-200 active:scale-100">
              Acerca de
            </button>

            </Link>
          </div>
        </motion.div>
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img className="md:p-15 mr-28 p-20" src="/img/landing.png" alt="" />
        </div>
      </div>

      {/* <!-- Portafolio view section--> */}
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-3xl">Portafolio</h1>
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

      {/* Skillset section */}
      <div>
        <div className="flex items-center mt-24 justify-center">
          <h1 className="font-bold text-3xl">Habilidades</h1>
        </div>
        <div className='grid grid-cols-2 lg:flex w-full items-center justify-center'>
          <div className="grid lg:flex lg:space-x-36 mt-8 mb-8 w-full items-center justify-center">
            <div className='mt-16 hover:scale-125 transition-all ease-in-out duration-150'>
               <HtmlSvg />
            </div>
            <div className='mt-16 hover:scale-125 transition-all ease-in-out duration-150'>
              <CssSvg />
            </div>
            <div className='mt-16 hover:scale-125 transition-all ease-in-out duration-150'>
              <JavaScriptSvg />
            </div>
          </div>
          <div className="grid lg:flex lg:space-x-36 w-full items-center justify-center">
            <div className='mt-16 hover:scale-125 transition-all ease-in-out duration-150'>
              <TailwindcssSvg />
            </div>
            <div className='mt-16 hover:scale-125 transition-all ease-in-out duration-150'>
              <ReactjsSvg />
            </div>
            <div className='mt-16 hover:scale-125 transition-all ease-in-out duration-150'>
              <NextjsSvg />
            </div>
          </div>
        </div>
      </div>

      {/* footer section*/}
      <div class="mt-40 pb-4 w-full bg-gray-500 grid grid-cols-2">
        <div class="flex flex-col lg:justify-start items-start justify-center ml-20 mt-5">
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
        <div class="flex flex-col items-start justify-center ml-5 mt-5">
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
    </>
  );
}
