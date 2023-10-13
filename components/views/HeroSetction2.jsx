import { motion } from 'framer-motion'
import Link from 'next/link'
// import {heroSectWords} from '../../helpers/Variants'
import { heroSectWords } from '@/components/helpers/Variants'
// import NewTypingText from '../hooks/NewTipingText'
import NewTypingText from '@/components/hooks/NewTipingText'

function HeroSetction2({setShowModal, locale}) {

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900">
      <div className="flex flex-col w-full h-full items-center justify-start pt-20">
        <h1 className="flex flex-col font-bold text-center items-center justify-start text-gray-200 md:text-6xl sm:text-4xl text-3xl">
          <div>
          <h1 className='text-3xl sm:text-4xl'>{locale.heroMainTitle1}</h1>
          </div>
          <div className='h-16 sm:h-20'>
             <NewTypingText text={locale.heroMainTitle2} styleText="font-bold text-center flex items-center justify-center"/>
          </div>
             
        </h1>
        <motion.div className="pl-5 pr-5 lg:pl-0 lg:pr-0"
        variants={heroSectWords}
        initial="hidden"
        animate="visible"
        >
          <h1 className="text-base text-center mt-2 text-gray-200">
            {locale.heroH4}
          </h1>
          <h1 className="mt-2 text-lg text-gray-200">
            {locale.heroLandingWords}
        </h1>

        <div className='flex items-center justify-center pt-10'>

          <a href="#about">
            <button
              className="bg-orange-500 text-center
              text-md font-semibold shadow-2xl py-2 px-2 rounded-xl 
              hover:scale-110 transition-all 
              ease-in-out duration-200 active:scale-100"
              // onClick={() => setShowModal(true)}
            >
              {locale.heroButton}
            </button>
          </a>
        </div>
      </motion.div>
      </div>
    <div className="hidden md:flex items-center justify-center">
      <img className="" src="/img/back_img.jpg" alt="" />
    </div>
  </div>
  )
}

export default HeroSetction2
