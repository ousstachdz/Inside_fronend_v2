import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/axios'
import { useAxiosPrivate } from '../../api/useAxiosPrivate'
import Loading from '../_commun/_Loading'

export default function InfoUser({ user, setUser }) {
  const axiosPrivate = useAxiosPrivate()
  const [gander, setGender] = useState('')
  const [maritalState, setMaritalState] = useState('')
  const [joinedDate, setJoinedDate] = useState(null)
  const [birthDate, setBirthDate] = useState(null)
  const GANDER = {
    NDF: 'not define',
    ML: 'male',
    FML: 'female',
  }

  const MARITAL_STATE = {
    NDF: 'not define',
    SNG: 'single',
    INR: 'in relation',
    MRD: 'married',
    DVR: 'devorced',
    CBT: 'cohabiting',
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (user != null) {
      setGender(GANDER[user?.more_info.gander])
      setMaritalState(MARITAL_STATE[user?.more_info.marital_state])
      const joined_date = new Date(user.date_joined)
      const birth_date = new Date(user.more_info.birth_date)
      setBirthDate(birth_date.toString().slice(0, 15))
      setJoinedDate(joined_date.toString().slice(0, 15))
    }
  }, [user])

  const getUser = async () => {
    await axiosPrivate
      .get('/api/user/get_authenticated_user/')
      .then((response) => {
        setUser(response.data)
      })
  }
  return (
    <div className=' relative'>
      <div className='photo_cover'>
        <div className='w-full h-full absolute z-30 overflow-hidden'>
          {user?.photo ? (
            <img
              src={BASE_URL + user?.photo}
              alt=''
              className='w-full h-full object-cover '
            />
          ) : null}
        </div>
        <div className='photo_profile'>
          {user?.photo_cover ? (
            <img
              src={BASE_URL + user?.photo_cover}
              alt=''
              className='w-full h-full object-cover '
            />
          ) : null}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center  border_thin pb-8 rounded-b-lg'>
        <div className=' text-center w-2/9 md:w-1/7 aspect-square '></div>

        <div className='w-1/2 text-center'>
          <h1 className='capitalize text-lg sm:text-2xl xl:text-4xl pt-4'>
            {user?.first_name} {user?.last_name}
          </h1>
          <p className='text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:py-2'>
            {user?.bio}
          </p>
        </div>
      </div>
      <div className='w-full mt-4 border_thin p-4 capitalize rounded-lg'>
        <h2 className='font-semibold'>More Informations:</h2>
        {user ? (
          <div className='mx-8 lg:mx-20 mt-2'>
            <div className='flex md:flex-row flex-col'>
              <div className='flex md:w-1/2 text-xs sm:text-base my-2 '>
                <span>
                  <p className='capitalize text_color w-32'>Marital Status</p>{' '}
                </span>
                <p>{maritalState}</p>
              </div>
              <div className='flex md:w-1/2 text-xs sm:text-base my-2 '>
                <span>
                  <p className='capitalize text_color w-32'>Gander</p>{' '}
                </span>
                <p>{gander}</p>
              </div>
            </div>
            <div className='flex md:flex-row flex-col'>
              <div className='flex md:w-1/2 text-xs sm:text-base my-2 '>
                <span>
                  <p className='capitalize text_color w-32'>Joined </p>{' '}
                </span>
                <p>{joinedDate}</p>
              </div>
              <div className='flex md:w-1/2 text-xs sm:text-base my-2 '>
                <span>
                  <p className='capitalize text_color w-32'>email</p>{' '}
                </span>
                <p>{user?.email}</p>
              </div>
            </div>
            <div className='flex md:flex-row flex-col'>
              <div className='flex md:w-1/2 text-xs sm:text-base my-2 '>
                <span>
                  <p className='capitalize text_color w-32'>anniversery</p>{' '}
                </span>
                <p>{birthDate}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
