import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, childText } from '../helpers/Variants'

const TypingText = ({ text, styleText }) => {

    const words = Array.from(text)

  return (
    <motion.div
        className={styleText}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
          >
        {words.map((word, index) => (
             <motion.h1 
                   variants={childText}
                   key={index}>
                   {/* {word === " " ? "\u00A0" : word} */}
                   {word}
                   </motion.h1>
        
        )) 
        }       
    </motion.div>
    // <div>
    //     <ul>

    //  {names.map((w) => {
    //     return <li key={w}>{w}</li>
    //  } )}
    //     </ul>
    // </div>
  );
};

export default TypingText