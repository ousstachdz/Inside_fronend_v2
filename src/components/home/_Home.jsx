import React from 'react'
import PageLayout from '../_commun/_PageLayout'
import hero from '../../assets/hero.svg'
export default function Home() {
  const page = (
    <div className='flex h-full flex-col md:flex-row'>
      <div className=' w-full md:w-1/2 relative flex flex-col justify-center text-center md:text-start pt-32 md:p-0'>
        <h1 className='text-6xl py-2'>InSide</h1>
        <h2 className='text-3xl capitalize'>
          Welcome to<span className='text-blue-600'> our</span> social
          community!
        </h2>
        <p className='text-gray-700'>
          Connect with friends, family, and millions of like-minded individuals
          from around the world. Share your experiences, thoughts, and memories
          with those who matter the most.
        </p>
      </div>
      <div className='w-full md:w-1/2  relative flex justify-center md:justify-end  items-center'>
        <img src={hero} alt='' />
      </div>
    </div>
  )
  return <PageLayout page={page} />
}
