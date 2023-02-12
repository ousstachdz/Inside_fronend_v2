import React, { useState } from 'react'
import Loading from '../_commun/_Loading'
import PageLayout from '../_commun/_PageLayout'
import FriendShips from './FriendShips'
import InfoUser from './InfoUser'

export default function Profile() {
  const [user, setUser] = useState(null)
  const page = (
    <div className='pt-16 bottom-16 overflow-hidden '>
      <InfoUser user={user} setUser={setUser} />
      {user == null ? <Loading /> : <FriendShips />}
    </div>
  )
  return <PageLayout page={page} />
}
