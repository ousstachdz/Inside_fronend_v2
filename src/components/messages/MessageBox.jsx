import { faHandsHelping, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Suggestion from '../_commun/_Suggestion'

export default function MessageBox({ messages }) {
  return (
    <div className='bg-blue-500 w-2/3'>
      {' '}
      {messages?.length > 1 ? (
        <div>Messages</div>
      ) : (
        <div className='capitalize flex justify-center items-center h-full border_thin w-full'>
          <div className=' rounded-lg flex flex-col justify-center items-center w-full'>
            <FontAwesomeIcon
              className=' text-7xl opacity-70'
              icon={faMessage}
            />
            <h1 className='text-4xl opacity-70 p-2'>Hello</h1>
            <p className='text-center opacity-40'>
              Select a friend and start privete conversation.
            </p>
            <div className='w-full'>
              <h3 className='p-2 text-center'>peopel you might know:</h3>
              <div className='dark:bg-zinc-500 p-4 '>
                <Suggestion />
              </div>
            </div>
          </div>
        </div>
      )}{' '}
    </div>
  )
}
