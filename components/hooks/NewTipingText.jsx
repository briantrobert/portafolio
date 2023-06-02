import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { staggerContainer2, childText2 } from '../helpers/Variants'

function NewTypingText({ text, styleText }) {

    const [textIndex, setTextIndex] = useState(0);
    const [mount, setMount] = useState(true);
    const texts = ['this', 'that', 'these'];
    const words = Array.from(text[textIndex])
  
    console.log(mount)
    const Desmount=()=>{
      setTimeout(() => {
        setMount(false)
       }, 6000);
    }
  
    useEffect(() => {
     setTimeout(() => {
      setTextIndex((textIndex + 1) % texts.length);
      setMount(true)
     }, 10000);
     Desmount()
    }, [textIndex])
    
    return (
      <AnimatePresence>
        {mount && <motion.div
          className={styleText}
          variants={staggerContainer2}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words.map((word, index) => (
                      <motion.h1
                          variants={childText2}
                          key={index}>
                          {word === " " ? "\u00A0" : word}
                      </motion.h1>
  
                  ))
                  }
        </motion.div>}
      </AnimatePresence>
    )
  }

export default NewTypingText

