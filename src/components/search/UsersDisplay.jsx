import React from 'react'
import { Link } from 'react-router-dom'
import Suggestion from '../_commun/_Suggestion'
import UserCardButton from './UserCardButton'

export default function UsersDisplay({ result }) {
  return (
    <div className='w-full'>
      {result == null ? (
        <div className='flex justify-center'>
          <Suggestion />
        </div>
      ) : (
        result?.map((item) => {
          return (
            <div key={item.id} className='w-full flex justify-center'>
              <div className='border_thin p-1 flex justify-between items-center my-4 rounded-lg w-full md:w-1/2 '>
                <Link to={`/profile/${item.id}`} className='flex'>
                  <div className='overflow-hidden aspect-square w-12 m-2 rounded-full'>
                    <img
                      className=' '
                      src='https://oussamatachiportfolio.vercel.app/assets/myphoto-673b011c.jpg'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col m-2'>
                    <h1 className='mb-0.5 font-semibold text-sm'>
                      {item.first_name} {item.last_name}
                    </h1>
                    <p className='text-xs opacity-40'>Lorem, ipsum dolor.</p>
                  </div>
                </Link>
                {item?.relation ? (
                  <UserCardButton relation={item.relation} id={item.id} />
                ) : null}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
