import React, { useEffect, useState } from 'react'
import { useAxiosPrivate } from '../../api/useAxiosPrivate'
import UsersDisplay from '../search/UsersDisplay'
import PageLayout from '../_commun/_PageLayout'

export default function FollowRequests() {
  const [result, setResult] = useState(null)
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    axiosPrivate.get('api/friendship/get_all_requests/').then((response) => {
      setResult(response.data)
    })
  }, [])

  const page = (
    <div className='pt-20 sm:pt-32'>
      <UsersDisplay result={result} />
    </div>
  )
  return <PageLayout page={page} />
}
