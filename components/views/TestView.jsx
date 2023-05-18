import React,{useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function TestView() {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
         target: targetRef,
         offset: ['end end','start end']
    });
  
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], ['10', '-100px','-200px']);
    const otherX = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '100px','200px']);
    
  return (
    <>
    <div className='flex flex-col text-white'>
      <div className='flex h-screen w-full font-bold'>
        <h1>
            Primera Pantalla
        </h1>
      </div>
      <div className='flex h-screen w-full'>
        <motion.div className='pt-5 pl-5 ml-5 mr-5 w-1/2 bg-slate-400 h-64'
           ref={targetRef}
           style={{x, opacity}}>
          <h1>
            Segunda Pantalla
          </h1>
        </motion.div>
        <motion.div className='pt-5 pl-5 mr-5 w-1/2 h-64'
            ref={targetRef}
            style={{x: otherX, opacity}}
            >
           <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, obcaecati veniam! Iste reprehenderit adipisci rem in doloremque maiores laborum, voluptatibus esse qui, incidunt numquam quaerat dolores consequatur, facilis sapiente atque.
            </p>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default TestView
