import React from 'react'
import CssSvg from '../svg/CssSvg'
import HtmlSvg from '../svg/HtmlSvg'
import JavaScriptSvg from '../svg/JavaScriptSvg'
import NextjsSvg from '../svg/NextjsSvg'
import ReactjsSvg from '../svg/ReactjsSvg'
import TailwindcssSvg from '../svg/TailwindCssSvg'
import FramerMotion from '../svg/FramerMotionSvg'
import GraphQlSvg from '../svg/GraphqlSvg'
import TypingText from '../hooks/TypingText'

export default function SkillSection() {
  return (
    <div id="skillsets" className="pt-10 pb-12 bg-gray-900">
        <div className="flex items-center pt-5 justify-center">
          <TypingText text="Habilidades" styleText="font-bold text-3xl text-gray-300 flex items-center justify-center"/>
        </div>
        <div className="grid grid-cols-2 lg:flex flex-col mb-5 w-full items-center justify-center">
          <div className="grid lg:flex lg:space-x-36 mt-8 mb-8 w-full items-center justify-center">
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <HtmlSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <CssSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <JavaScriptSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <FramerMotion />
            </div>
          </div>
          <div className="grid lg:flex lg:space-x-36 w-full items-center justify-center">
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <TailwindcssSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <ReactjsSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <NextjsSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150 animate-pulse">
              <GraphQlSvg />
            </div>
          </div>
        </div>
      </div>
  )
}

