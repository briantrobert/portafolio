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
import FrontendSVG from '../../components/svg/skillsection/FrontendSVG'
import BackendSVG from '../../components/svg/skillsection/BackendSVG'
import GitSVG from '../../components/svg/skillsection/GitSVG'
import VisualStudioCodeSVG from '../../components/svg/skillsection/VisualStudioCodeSVG'
import FigmaSVG from '../../components/svg/skillsection/FigmaSVG'
import ToolsSVG from '../../components/svg/skillsection/ToolsSVG'
import TypingText from '../hooks/TypingText'

function SkillView({locale}) {

  const targetRef = useRef();
  let y;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end','start end']
});

const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
y = useTransform(scrollYProgress, [0, 1], ['0', '70px']);

  return (
    <div ref={targetRef} id="skillsets" className="pt-10 pb-14 bg-gray-900">
       <div className="flex items-center pb-24 pt-5 justify-center">
          <TypingText text={locale.skillsectionName} styleText="font-bold text-3xl text-gray-300 flex items-center justify-center"/>
        </div>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 w-full gap-24 lg:grid-cols-3 text-white mb-10 justify-items-center"
        style={{ opacity, y }}>
      <div className="w-80 h-64">
        <div className="w-full flex justify-center items-center pb-5">
          <div className='w-full pl-5 pr-3'>
            <hr />
          </div>
          <div >
            <FrontendSVG />
          </div>
          <div className='w-full pl-3 pr-2'>
            <hr />
          </div>
        </div>
        <div className="w-full h-full pt-5">
          <div className='flex justify-between pl-7 pr-7 pb-6'>
           <HtmlSvg itsSemi/>
           <CssSvg itsSemi/>
           <JavaScriptSvg itsSemi/>
          </div>
          <div className='flex justify-between pl-7 pr-7 pb-6'>
           <FramerMotion itsSemi/>
           <TailwindcssSvg itsSemi/>
           <ReactjsSvg itsSemi/>
          </div>
          <div className='flex pl-7 pr-7'>
            <div className='mr-16'>
              <MaterialUISVG />
            </div>
           <NextjsSvg itsSemi/>
          </div>
        </div>
      </div>
      <div className="w-80 h-40">
        <div className="w-full flex justify-center items-center pb-5">
          <div className='w-full pl-5 pr-3'>
            <hr />
          </div>
          <div className='mt-1'>
            <BackendSVG />
          </div>
          <div className='w-full pl-3 pr-2'>
            <hr />
          </div>
        </div>
        <div className="w-full h-full pt-5">
          <div className='flex justify-between pl-7 pr-7'>
            <div className='bg-white w-11 h-11 rounded-full flex items-center justify-center'>
             <ExpressSVG />
            </div>
           <FastApiSVG />
           <GraphQlSvg />
          </div>
        </div>
      </div>
      <div className="w-80 h-40">
      <div className="w-full flex justify-center items-center pb-5 text-orange-600">
          <div className='w-full pl-5 pr-3'>
            <hr />
          </div>
          <div >
            <ToolsSVG />
          </div>
          <div className='w-full pl-3 pr-2'>
            <hr />
          </div>
        </div>
        <div className="w-full h-full pt-5">
          <div className='flex justify-between pl-7 pr-7 pb-6'>
           <VisualStudioCodeSVG />
           <FigmaSVG />
           <GitSVG />
          </div>
          </div>
      </div>
    </motion.div>
    </div>
  )
}

export default SkillView
