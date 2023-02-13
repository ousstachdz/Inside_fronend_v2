import { faHandsHelping, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Suggestion from '../_commun/_Suggestion'

export default function MessageBox({ messages }) {
  return (
    <div className='w-full sm:w-1/2 md:w-2/3 h-full'>
      {' '}
      {messages?.length > 1 ? (
        <div>Messages</div>
      ) : (
        <div className='capitalize flex justify-center items-center h-full border_thin w-full'>
          <div className=' rounded-lg flex flex-col justify-center items-center w-full'>
            <FontAwesomeIcon
              className=' sm:text-7xl text-5xl opacity-70 '
              icon={faMessage}
            />
            <h1 className='text-3xl sm:text-4xl opacity-70 p-2'>Hello</h1>
            <p className='text-center text-sm sm:text-base w-60 opacity-40'>
              Select a friend and start privete conversation.
            </p>
            <div className='w-full'>
              <h3 className='p-2 text-center'>peopel you might know:</h3>
              <div className='dark:bg-zinc-500 p-4 '>
                <div className='flex justify-center'>
                  <Suggestion />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
