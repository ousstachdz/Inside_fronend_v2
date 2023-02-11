import React, { useContext } from 'react'
import PageLayout from '../_commun/_PageLayout'
import hero from '../../assets/hero.svg'
import heroDark from '../../assets/herodark.svg'
import { ThemeContext } from '../../context/ThemeContext'
export default function Home() {
  const { isDarkTheme } = useContext(ThemeContext)
  const page = (
    <div className='flex  flex-col md:flex-row h-full'>
      <div className=' w-full md:w-1/2 relative flex flex-col justify-center text-center md:text-start pt-32 md:p-0'>
        <h1 className='text-6xl py-2'>InSide</h1>
        <h2 className='text-3xl capitalize py-2'>
          Welcome to
          <span className='text-blue-600 dark:text-blue-500'> our</span> social
          community!
        </h2>
        <p className='text-gray-700'>
          Connect with friends, family, and millions of like-minded individuals
          from around the world. Share your experiences, thoughts, and memories
          with those who matter the most.
        </p>
      </div>
      <div className='w-full md:w-1/2  relative flex justify-center md:justify-end  items-center'>
        <img src={isDarkTheme ? heroDark : hero} alt='' />
      </div>
    </div>
  )
  return <PageLayout page={page} />
}
