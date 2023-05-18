import {useRouter} from 'next/router'
import { allEnglish,allSpanish } from '@/i18n/en-es'

function MoreButton({setShowModal}) {

    const {locale} = useRouter()
    const languaje = locale === "en" ? allEnglish : allSpanish;

  return (
      <>
          <button
              className="mt-6 bg-orange-500 text-gray-800 text-md font-semibold shadow-2xl 
                        py-2 px-3 rounded-xl hover:scale-110 transition-all ease-in-out duration-200 active:scale-100"
              onClick={() => setShowModal(true)}
          >
              {languaje.buttonSee}
          </button>
      </>
  )
}
export default MoreButton
