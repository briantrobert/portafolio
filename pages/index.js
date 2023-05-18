import { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Modal from '../components/ui/Modal'
import useWindowSize from '../components/hooks/useWindowSize'
import { allEnglish,allSpanish } from '@/i18n/en-es'
import { motion } from 'framer-motion'
import Footer from '../components/ui/Footer'
import SkillSection from '../components/views/SkillSectionView'
import Navbar from '../components/ui/Navbar'
import CardContact from '../components/views/CardContactView'
import MobileMenuModal from '../components/ui/MobileMenuModal'
import PortFolioView from '../components/views/PortFolioView'
import HeroSection from '../components/views/HeroSectionView'
import MobileMenu from '../components/ui/MobileMenu'

const svgVariants = {
  hidden:{
    rotate: -180
  },
  visible:{
    rotate: 0,
    transition: { duration: 0.2}
  }
}

const pathVariants = {
  hidden:{
    opacity: 0,
    pathLength: 0
  },
  visible:{
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export default function Home() {


  const { asPath, locale, locales} = useRouter()
  const languaje = locale === "en" ? allEnglish : allSpanish;
  const [height, width] = useWindowSize();
  const [showModal, setShowModal] = useState(false);
  const [movileMenu,setMovileMenu] = useState(false);

  const openMovileMenu = () => {
      setMovileMenu(!movileMenu)
  }

  useEffect(() => {
    if(width >=770 ){
      setMovileMenu(false);
    }
  }, [width])
  

  return (
    <div id="home">
      {/* navbar section */}
      <Navbar locale={languaje}>
        {/* mobile boton menu */}
        <div className="absolute flex flex-row-reverse justify-items-end w-full z-20 top-2 right-2">
          <button
            type="button"
            onClick={openMovileMenu}
            className="block md:hidden items-center py-1 px-1 justify-center rounded-md text-gray-300 hover:bg-orange-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <motion.svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              {/* <!--Icon when menu is closed. Heroicon name: outline/bars-3 Menu open: "hidden", Menu closed: "block" --> */}
              {!movileMenu && <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                variants={pathVariants}
              />}
              {/* <!--Icon when menu is open. Heroicon name: outline/x-mark Menu open: "block", Menu closed: "hidden" --> */}
              {movileMenu && <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                variants={pathVariants}
              />}
            </motion.svg>
          </button>
        </div>
      </Navbar>

      {/* <!--definition of movile menu with a modal--> */}
      <MobileMenuModal
        isVisibe={movileMenu}
        onClose={() => setMovileMenu(false)}
      >
        <MobileMenu onClose={() => setMovileMenu(false)} locale={languaje}/>
      </MobileMenuModal>


      {/* <!-- Hero section--> */}
      <HeroSection setShowModal={setShowModal} locale={languaje}/>

      {/* <!-- Portafolio view section--> */}
      <div>
        <PortFolioView locale={locale} portFolioSecc={languaje.portFolioSecc}/>
      </div>

      {/* Skillset section */}
      <div className='lg:pt-0 pt-32'>
        <SkillSection />
      </div>

      {/* footer section*/}
      <Footer />

      {/* modal insances */}
      <Modal isVisibe={showModal} onClose={() => setShowModal(false)}>
        <CardContact />
      </Modal>
    </div>
  );
}
