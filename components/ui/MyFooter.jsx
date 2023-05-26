import React from 'react'
import LinkedInIcon from '../svg/LinkedInIcon'
import TelegramIcon from '../svg/TelegramIcon'

function MyFooter({locale}) {
  return (
    <div className='h-48 w-full mt-24'>
      <div className='flex sm:justify-between flex-col lg:flex-row items-center pl-14 pr-14 gap-10'>
        <div className='mt-5'>
            <div className='w-20 h-20 rounded-full object-cover overflow-hidden'>
              <img src="./img/testPhoto.jpg" />
            </div>
        </div>
        <div className='flex flex-col sm:flex-row text-white gap-x-48 pb-5 justify-center items-center gap-y-5'>
            <div>
              <div className='flex items-center justify-center'>
               <h1>{locale.resources}</h1>
              </div>
            <div className='flex w-full justify-between pt-5'>
              <ul className="text-gray-600 dark:text-gray-400 font-medium w-full">
                <li className="mb-4">
                  <a href="https://react.dev/" className="hover:underline">Reactjs</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
              <ul className="text-gray-600 dark:text-gray-400 font-medium w-52">
                <li className="mb-4">
                  <a href="https://nextjs.org/" className="hover:underline">Nextjs</a>
                </li>
                <li>
                  <a href="https://www.framer.com/motion/" className="hover:underline">Framer-Motion</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-52 pl-16 lg:pl-0'>
            <div>
              <h1>{locale.footerFallow}</h1>
            </div>
            <div className='pt-5'>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/briantrobert/portafolio" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/briant-robert-mengana-846258258" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between m-5 pt-10 pr-10">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Briant Robert Mengana</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://www.linkedin.com/in/briant-robert-mengana-846258258" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
             <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/briantrobert?tab=repositories" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            <span className="sr-only">GitHub</span>
          </a>
          <a href="t.me/briantrobert" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <TelegramIcon />
                      <span className="sr-only">Telegram</span>
                  </a>
              </div>
          </div>
    </div>
  )
}

export default MyFooter
