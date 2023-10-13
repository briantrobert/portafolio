import TypingText from '../hooks/TypingText'
import PortafolioCard from './PortafolioCard'
import {dataProyectEs,dataProyectEn} from '../data/dataOfProyects'
import { motion } from 'framer-motion'
import { fadeInAnimationVariants } from '../helpers/Variants';



function PortFolioView({locale, portFolioSecc}) {

  const dataProyect = locale === "en" ? dataProyectEn : dataProyectEs;

  return (
    <div id="portfolio" className="pt-10 pb-28">
      <div className="pb-10 flex items-center justify-center">
        <h1 className="font-bold text-3xl text-gray-300"></h1>
      </div>
      <div className='w-full flex items-center justify-center md:justify-start'>
        <div className='flex items-center w-fit pb-10 md:pl-14 justify-center flex-col'>
          <TypingText text={portFolioSecc} styleText="font-semibold text-3xl text-gray-300 flex items-center justify-center" />
          <div className='w-full'>
            <hr className="border-orange-400 border-2" />
          </div>
        </div>
      </div>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-100 w-full lg:p-5'>
      {dataProyect.map((e, index) => (
          <motion.li key={e.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
            custom={index}>
             <PortafolioCard
              data={e}
            />
          </motion.li>
        ))}

      </ul>
    </div>
  );
}

export default PortFolioView