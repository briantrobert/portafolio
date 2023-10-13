import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HtmlSvg from '../../components/svg/skillsection/HtmlSvg'
import CssSvg from '../../components/svg/skillsection/CssSvg'
import JavaScriptSvg from '../../components/svg/skillsection/JavaScriptSvg'
import NextjsSvg from '../../components/svg/skillsection/NextjsSvg'
import ReactjsSvg from '../../components/svg/skillsection/ReactjsSvg'
import TailwindcssSvg from '../../components/svg/skillsection/TailwindCssSvg'
import FramerMotion from '../../components/svg/skillsection/FramerMotionSvg'
import MaterialUISVG from '../../components/svg/skillsection/MaterialUISVG'
import GraphQlSvg from '../../components/svg/skillsection/GraphqlSvg'
import ExpressSVG from '../../components/svg/skillsection/ExpressSVG'
import FastApiSVG from '../../components/svg/skillsection/FastApiSVG'
import GitSVG from '../../components/svg/skillsection/GitSVG'
import VisualStudioCodeSVG from '../../components/svg/skillsection/VisualStudioCodeSVG'
import FigmaSVG from '../../components/svg/skillsection/FigmaSVG'
import TypingText from '../hooks/TypingText'
import { fadeInAnimationVariantsSide } from '../helpers/Variants'
import MongoDBSvg from '../svg/skillsection/MongoDBSvg'

function SkillView({locale}) {

  const targetRef = useRef();
  let y;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end','start end']
});

const frontend = [<HtmlSvg itsSemi />,<CssSvg itsSemi />,<JavaScriptSvg itsSemi />,<FramerMotion itsSemi />,<TailwindcssSvg itsSemi />,<ReactjsSvg itsSemi />,<MaterialUISVG />,<NextjsSvg itsSemi />];
const backend = [<ExpressSVG />,<FastApiSVG />,<GraphQlSvg />,<MongoDBSvg itsSemi/>];
const tools = [ <VisualStudioCodeSVG />,<FigmaSVG />,<GitSVG />];

const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
y = useTransform(scrollYProgress, [0, 1], ['0', '70px']);

  return (
    <div id="skillsets" ref={targetRef} className="pt-8">
      <div className='w-full flex items-center justify-center md:justify-start'>
        <div className='flex items-center w-fit pb-14 pt-14 md:pl-14 justify-center flex-col'>
          <TypingText text={locale.skillsectionName} styleText="font-semibold text-3xl text-gray-300 flex items-center justify-center" />
          <div className='w-full'>
            <hr className="border-orange-400 border-2" />
          </div>
        </div>
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 w-full gap-24 lg:grid-cols-3 text-white mb-28 justify-items-center"
        style={{ opacity, y }}>
        <div className="w-80 h-64">
          <div className='w-full flex items-center justify-center md:justify-start'>
            <div className="w-fit flex flex-col justify-center items-start pb-3 md:pl-8">
              {/* <TypingText text="Front-end" styleText="font-bold text-xl text-gray-300 flex items-center justify-center" /> */}
              <h1 className='font-bold text-xl text-gray-300 flex items-center justify-center'>Front-end</h1>
              <div className='w-full'>
                <hr className="border-orange-500 border-2" />
              </div>
            </div>
          </div>
          <div className="w-full h-full pt-5">
            <ul className='grid grid-cols-3 gap-5 pl-7 pr-7 pb-6'>
              {
                frontend.map((e, index) => (
                   <motion.li
                     variants={fadeInAnimationVariantsSide}
                     key={index}
                     initial="initial"
                     whileInView="animate"
                     // viewport={{
                     //   once: true,
                     // }}
                     custom={index}>
                      {e}
                   </motion.li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="w-80 h-40">
          <div className='w-full flex items-center justify-center md:justify-start'>
            <div className="w-fit flex flex-col justify-center items-start pb-3 md:pl-8">
              <h1 className='font-bold text-xl text-gray-300 flex items-center justify-center'>Back-end</h1>
              <div className='w-full'>
                <hr className="border-orange-500 border-2" />
              </div>
            </div>
          </div>
          <div className="w-full h-full pt-5">
            <ul className='grid grid-cols-3 gap-5 pl-7 pr-7 pb-6'>
              {
                backend.map((e, index) => (
                   <motion.li
                     variants={fadeInAnimationVariantsSide}
                     key={index}
                     initial="initial"
                     whileInView="animate"
                     // viewport={{
                     //   once: true,
                     // }}
                     custom={index}>
                      {e}
                   </motion.li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="w-80 h-40">
          <div className='w-full flex items-center justify-center md:justify-start'>
            <div className="w-fit flex flex-col justify-center items-start pb-3 md:pl-8">
              <h1 className='font-bold text-xl text-gray-300 flex items-center justify-center'>{locale.tools}</h1>
              <div className='w-full'>
                <hr className="border-orange-500 border-2" />
              </div>
            </div>
          </div>
          <div className="w-full h-full pt-5">
          <ul className='grid grid-cols-3 gap-5 pl-7 pr-7 pb-6'>
              {
                tools.map((e, index) => (
                   <motion.li
                     variants={fadeInAnimationVariantsSide}
                     key={index}
                     initial="initial"
                     whileInView="animate"
                     // viewport={{
                     //   once: true,
                     // }}
                     custom={index}>
                      {e}
                   </motion.li>
                ))
              }
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SkillView
