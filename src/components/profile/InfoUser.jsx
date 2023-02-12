import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/axios'
import { useAxiosPrivate } from '../../api/useAxiosPrivate'

export default function InfoUser() {
  const [user, setUser] = useState(null)
  const axiosPrivate = useAxiosPrivate()
  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    await axiosPrivate.get('/api/user/').then((response) => {
      setUser(response.data)
    })
  }
  return (
    <div className=' relative'>
      <div className='photo_cover'>
        <div className='w-full h-full absolute  overflow-hidden'>
          <img
            src={BASE_URL + user?.photo}
            alt=''
            className='w-full h-full object-cover '
          />
        </div>
        <div className='photo_profile'>
          <img
            src={BASE_URL + user?.photo}
            alt=''
            className='w-full h-full object-cover '
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center  border_thin pb-8'>
        <div className=' text-center w-2/9 md:w-1/7 aspect-square '></div>
        <div className='w-1/2 text-center'>
          <h1 className='capitalize text-lg sm:text-2xl xl:text-4xl pt-4'>
            {user?.first_name} {user?.last_name}
          </h1>
          <p className='text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:py-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            est.
          </p>
        </div>
        {/* <hr class='w-full h-px' /> */}
      </div>
      <div className='w-full mt-4 border_thin p-4 capitalize'>
        <h1>More Informations:</h1>
        <div className=''></div>
      </div>
    </div>
  )
}
