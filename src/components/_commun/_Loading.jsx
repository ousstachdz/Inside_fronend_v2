import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Loading() {
  return (
    <div className='absolute flex justify-center items-center top-16 bottom-0 left-0 right-0 z-50'>
      <span className=''>
        <FontAwesomeIcon
          icon={faCircleNotch}
          className='animate-spin  text-6xl text-blue-600 dark:text-blue-500'
        />
      </span>
    </div>
  )
}
