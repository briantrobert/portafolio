import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { staggerContainer2, childText2 } from '../../components/helpers/Variants'

function test() {

  const [textIndex, setTextIndex] = useState(0);
  const [mount, setMount] = useState(true);
  const texts = ['this', 'that', 'these'];
  const words = Array.from(texts[textIndex])

  console.log(mount)
  const Desmount=()=>{
    setTimeout(() => {
      setMount(false)
     }, 4000);
  }

  useEffect(() => {
   setTimeout(() => {
    setTextIndex((textIndex + 1) % texts.length);
    setMount(true)
   }, 7000);
   Desmount()
  }, [textIndex])
  
  return (
    <AnimatePresence>
      {mount && <motion.div
        className='w-full h-screen flex items-center justify-center text-white'
        variants={staggerContainer2}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
        {words.map((word, index) => (
                    <motion.h1
                        variants={childText2}
                        key={index}>
                        {word === " " ? "\u00A0" : word}
                    </motion.h1>

                ))
                }

        </AnimatePresence>
      </motion.div>}
    </AnimatePresence>
  )
}

export default test
