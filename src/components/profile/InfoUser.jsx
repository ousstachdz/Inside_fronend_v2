import React, { useEffect, useState } from 'react'
import { axiosPrivate, BASE_URL } from '../../api/axios'

export default function InfoUser() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    await axiosPrivate.get('/api/user/').then((response) => {
      console.log(response.data)
      setUser(response.data)
    })
  }
  return (
    <div className='top-16 relative'>
      <div className='photo_cover'>
        <div className='photo_profile'>
          <img src={BASE_URL + user?.photo} alt='' className='w-full h-full' />
        </div>
      </div>
      <div className='relative text-center after:top-24  md:top-20 xl:top-24  2xl:top-44'>
        <h1 className='capitalize text-lg sm:text-xl md:text-2xl xl:text-4xl '>
          {user?.first_name} {user?.last_name}
        </h1>
      </div>
    </div>
  )
}
