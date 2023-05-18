import React from 'react'
import Link from 'next/link'
import HomeSVG from '../svg/movileMenu/HomeSVG'
import PortafolioSVG from '../svg/movileMenu/PortafolioSVG'
import SkillsetSVG from '../svg/movileMenu/SkillsetSVG'

function MobileMenu({ onClose, locale}) {


  return (
    <div className="absolute rounded-md bg-gray-300 top-11 right-5 w-7/12" id="mobile-menu">
      <div className="flex flex-col px-2 pt-2 pb-3">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <div>
          <a
            href="#home"
            className="flex gap-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900 px-2 py-2 w-full rounded-md text-base font-medium"
            onClick={() => onClose()}
          >
            <HomeSVG />
            {locale.navButton[0]}
          </a>
        </div>
        <div>
          <a
            href="#portfolio"
            className="flex gap-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900 px-2 py-2 w-full rounded-md text-base font-medium"
            onClick={() => onClose()}
          >
           <PortafolioSVG />
           {locale.navButton[1]}
          </a>
        </div>
        <div>
          <a
            href="#skillsets"
            className="flex gap-2 text-gray-700 hover:bg-gray-400 hover:text-gray-900 px-2 py-2 w-full rounded-md text-base font-medium"
            onClick={() => onClose()}
          >
          <SkillsetSVG />
          {locale.navButton[2]}
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu