import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function OldContacts({ friends }) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3  py-4 sm:h-full border_thin'>
      {true ? (
        <div>Hello friend</div>
      ) : (
        <div className='flex flex-col justify-center items-center h-full m-1 capitalize text-center'>
          <p className='sm:text-7xl text-5xl opacity-70 p-2'>
            <FontAwesomeIcon icon={faSearch} />
          </p>
          <Link className='text_color text-sm sm:text-base ' to={'/search'}>
            Find Some more friends
          </Link>
          <h3 className='text-sm sm:text-base w-60'>
            You have No friend on the platform yet
          </h3>
        </div>
      )}
    </div>
  )
}
