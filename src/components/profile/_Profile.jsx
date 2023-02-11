import React from 'react'
import PageLayout from '../_commun/_PageLayout'
import InfoUser from './InfoUser'

export default function Profile() {
  const page = (
    <div className='h-screen'>
      <InfoUser />
    </div>
  )
  return <PageLayout page={page} />
}
