import React from 'react'

export default function OldContacts({ friends }) {
  return (
    <div className='bg-orange-500 w-1/3 border_thin'>
      {friends?.length > 1 ? (
        <div>Hello friend</div>
      ) : (
        <div> You have No friend yet</div>
      )}
    </div>
  )
}
