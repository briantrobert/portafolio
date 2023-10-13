import { useState } from 'react'
import { motion } from 'framer-motion'
import {menuNavbar} from '../data/menuNavbar'
import SwitchButton from './SwitchButton'

function Navbar({children, locale}) {

  const [active, setActive] = useState(0)

  return (
    <nav className="sticky z-20 top-0 flex justify-between bg-white/10 backdrop-blur-sm py-2">
        <div className="flex items-center lg:ml-28 ml-5">
          <motion.h1
            className="text-lg font-bold font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            <span className="text-gray-200">{locale.title1} </span>
            <span className="text-orange-500">{locale.title2}</span>
          </motion.h1>
        </div>
        
        <div className="flex items-center">
        <div className='z-30 mr-16 lg:mr-5'>
          <SwitchButton />
        </div>
          <div className="hidden md:block space-x-10 pr-4">
            <motion.ul
              className="flex justify-items-start space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 3 }}
            >
              {
                menuNavbar.map((menu, i) => (
                     
              <li key={i} 
                  className ={`py-1 px-2 text-lg ${ active == i ? 'text-orange-500' : 'text-gray-200'} 
                   hover:shadow-2xl  hover:text-orange-200
                   transition-all ease-in-out duration-150 font-semibold rounded-lg`}>
                <a href={menu.href} onClick={() => setActive(i)}>
                  <span>{locale.navButton[i]}</span>
                </a>
              </li>
                ))
              }
            </motion.ul>
          </div>
        </div>
          {children}
      </nav>
  )
}

export default Navbar