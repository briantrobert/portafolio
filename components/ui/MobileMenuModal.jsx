import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const backdrop = {
  visible: { opacity: 1},
  hidden: { opacity: 0}
}

const modal = {
  visible: { 
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 }
  },
  hidden: { 
    x: "100vw",
    opacity: 0
  }
}

export default function MobileModal({isVisibe, onClose, children}) {

    if( !isVisibe ) return null;

    const handleClose = (e) => {
          if( e.target.id === 'wrapper') onClose();

    }


  return (
    <AnimatePresence mode="wait">
      {isVisibe &&  
      
           <motion.div id="wrapper" className='fixed inset-0 z-10 bg-black bg-opacity-25 
               backdrop-blur-sm'
               onClick={handleClose}
               variants={backdrop}
               initial="hidden"
               animate="visible"
               exit="hidden">
               <motion.div className='w-full md:w-[500px] lg:w-[800px] flex flex-col'
                 variants={modal}
                 >
                 
                      {children}
    
               </motion.div>
           </motion.div>
        }
    </AnimatePresence>
  )
}