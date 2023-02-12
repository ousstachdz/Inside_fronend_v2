import React from 'react'
import PageLayout from '../_commun/_PageLayout'
import FriendShips from './FriendShips'
import InfoUser from './InfoUser'

export default function Profile() {
  const page = (
    <div className='pt-16 bottom-16 overflow-hidden '>
      <InfoUser />
      <FriendShips />
    </div>
  )
  return <PageLayout page={page} />
}
