import {useRef,useState, useEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProyectCard from './ProyectCard';
import Modal from '../ui/Modal'
import useWindowSize from '../../components/hooks/useWindowSize'
import MoreButton from '../ui/MoreButton'

function PortafolioCard({simple = '',imgUrl = '', imgLeft, data={}}) {

  const [showModal, setShowModal] = useState(false);
  const [height, width] = useWindowSize();
  const [movile,setMovile] = useState(false);

    const targetRef = useRef();
    let x;
  
    const { scrollYProgress } = useScroll({
         target: targetRef,
         offset: ['end end','start end']
    });

    useEffect(() => {
      if(width >=1024 ){
        setMovile(false);
      } else if(width < 1024 ) {
        setMovile(true)
      }
    }, [width])


    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    if(imgLeft){
      
      x = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '-100px','-200px']);

    } else {
      x = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '20px','50px']);

    }
    
      return (
      <>
          <div ref={targetRef} className="lg:flex space-y-5 lg:pt-3 lg:h-80 lg:w-3/4">
            {
              imgLeft ?
                <>
                  <motion.div className="lg:pl-5 lg:w-1/2 bg-slate-400 rounded-2xl h-64 ml-10 mr-12"
                    style={{ opacity, x }}
                  >
                    <h1>{imgUrl}</h1>
                  </motion.div>
                  <motion.div
                    style={{ opacity }}
                    className="lg:w-1/2 lg:pl-0 lg:pr-0 text-gray-300 pl-10 pr-10">
                    <p>
                      {simple}
                    </p>
                    <MoreButton setShowModal={setShowModal}/>
                  </motion.div>
                </>

                : <div className={`w-full flex ${movile ? 'flex-col-reverse' :''}`} >
                  <motion.div
                    style={{ opacity }}
                    className="lg:w-1/2 lg:pl-9 text-gray-300 pl-10 pr-10 pt-5">
                    <p>
                      {simple}
                    </p>
                    <MoreButton setShowModal={setShowModal}/>
                  </motion.div>
                  <motion.div className="lg:pr-0 lg:m-0 lg:w-1/2 bg-slate-400 rounded-2xl h-64 ml-10 mr-12"
                    style={{ x, opacity }}
                  >
                    <h1>{imgUrl}</h1>
                  </motion.div>

                </div>
            }

          </div>

        <Modal isVisibe={showModal} onClose={() => setShowModal(false)}>
          <ProyectCard data={data}/>
      </Modal>
      </>
    );
  }

  export default PortafolioCard