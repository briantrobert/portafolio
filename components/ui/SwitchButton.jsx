import {useState} from 'react'
import { useRouter } from 'next/router'

function SwitchButton() {

  const router = useRouter();
  console.log(router.locale)

  const handleChange = (data) => {
        router.push(router.pathname, router.pathname, {locale: data})
        data === 'es' ? setEsEn(false) : setEsEn(true);
        
  }

    const [esEn, setEsEn] = useState(router.locale === 'en') //english = true spanish = false

  return (
        <div className='inline-flex p-1 bg-gray-500 rounded-md font-semibold'>
          <button onClick={() => handleChange('es')} className={`px-2 lg:py-1 rounded ${!esEn ? 'bg-orange-500' : ''}  shadow`}>Es</button>
          <button onClick={() => handleChange('en')} className={`px-2 lg:py-1 rounded ${esEn ? 'bg-orange-500' : ''}  shadow`}>En</button>

        </div>
  
  )
}

export default SwitchButton
