import React from 'react'
import PageLayout from '../_commun/_PageLayout'
import MessageBox from './MessageBox'
import OldContacts from './OldContacts'

export default function Messages() {
  const page = (
    <div className='pt-16 bottom-16 overflow-hidden h-full flex justify-between'>
      <OldContacts />
      <MessageBox />
    </div>
  )
  return <PageLayout page={page} />
}
