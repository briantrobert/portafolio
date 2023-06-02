import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {heroSectWords} from '../helpers/Variants'
import NewTypingText from '../hooks/NewTipingText'

function HeroSection({setShowModal, locale}) {
  const { heroMainTitle2 } = locale

  return (
    <div className="flex h-screen w-full bg-gray-900">
      <div className="pb-10 flex items-center justify-center">
          <h1 className="font-bold text-3xl text-gray-300"></h1>
        </div>
        <div
          className="flex flex-col w-full h-full lg:w-1/2 items-start justify-center"
        >
        <div className='flex w-full lg:pl-24 pl-11'>
          <h1 className="flex font-bold text-gray-200 text-3xl">
            {locale.heroMainTitle1} 
               <NewTypingText text={heroMainTitle2} styleText="font-bold flex items-center justify-center"/>
               
          </h1>
        </div>
          <motion.div className="lg:pl-24 pl-11 pr-5 rounded-lg"
          variants={heroSectWords}
          initial="hidden"
          animate="visible"
          >
            <h1 className="text-sm mt-2 text-gray-200">
              {locale.heroH4}
            </h1>
            <h1 className="mt-2 text-lg text-gray-200">
              {locale.heroLandingWords}
          </h1>

          <div className='pt-5'>

            <Link href="/">
              <button
                className="bg-orange-500 text-center
                text-md font-semibold shadow-2xl py-2 px-2 rounded-xl 
                hover:scale-110 transition-all 
                ease-in-out duration-200 active:scale-100"
                onClick={() => setShowModal(true)}
              >
                {locale.heroButton}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img className="md:p-15 mr-28 p-20 " src="/img/landing.png" alt="" />
        </div>
      </div>
  )
}

export default HeroSection