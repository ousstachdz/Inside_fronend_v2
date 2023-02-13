import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/axios'
import Suggestion from '../_commun/_Suggestion'

export default function FriendShips({ friends }) {
  return (
    <div className='w-full mt-4 my-8 border_thin p-4 capitalize'>
      {friends?.length >= 1 ? (
        <div>
          <h1>Friends:</h1>
          <div className='flex justify-center'>
            <div className='gap-2 md:w-2/3 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4'>
              {friends.map((friend) => {
                return (
                  <Link to={`/profile/${friend.id}`}>
                    <div
                      key={friend.id}
                      className=' border_thin pb-2 rounded-lg overflow-hidden mt-8 '
                    >
                      <div className='w-full aspect-square '>
                        <img
                          src={`${BASE_URL}${friend.photo}`}
                          alt=''
                          srcset=''
                        />
                      </div>
                      <h3 className='capitalize p-2 text-center text-xs sm:text-sm'>
                        {friend.first_name} {friend.last_name}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>People you might know:</h1>
          <div className='flex justify-center items-center'>
            <Suggestion />
          </div>
        </>
      )}
    </div>
  )
}
