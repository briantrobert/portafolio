import CssSvg from '../../components/svg/skillsection/CssSvg'
import HtmlSvg from '../../components/svg/skillsection/HtmlSvg'
import JavaScriptSvg from '../../components/svg/skillsection/JavaScriptSvg'
import NextjsSvg from '../../components/svg/skillsection/NextjsSvg'
import ReactjsSvg from '../../components/svg/skillsection/ReactjsSvg'
import TailwindcssSvg from '../../components/svg/skillsection/TailwindCssSvg'
import FramerMotion from '../../components/svg/skillsection/FramerMotionSvg'
import GraphQlSvg from '../../components/svg/skillsection/GraphqlSvg'
import TypingText from '../hooks/TypingText'

export default function SkillSection({locale}) {
  return (
    <div id="skillsets" className="pt-10 pb-12 bg-gray-900">
        <div className="flex items-center pt-5 justify-center">
          <TypingText text={locale.skillsectionName} styleText="font-bold text-3xl text-gray-300 flex items-center justify-center"/>
        </div>
        <div className="grid grid-cols-2 lg:flex flex-col mb-5 w-full items-center justify-center">
          <div className="grid lg:flex lg:space-x-36 mt-8 mb-8 w-full items-center justify-center">
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <HtmlSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <CssSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <JavaScriptSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <FramerMotion />
            </div>
          </div>
          <div className="grid lg:flex lg:space-x-36 w-full items-center justify-center">
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <TailwindcssSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <ReactjsSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <NextjsSvg />
            </div>
            <div className="pt-16 hover:scale-125 transition-all ease-in-out duration-150">
              <GraphQlSvg />
            </div>
          </div>
        </div>
      </div>
  )
}

