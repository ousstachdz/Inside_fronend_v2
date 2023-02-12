import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../_commun/_PageLayout'
import { useAxiosPrivate } from '../../api/useAxiosPrivate'
import Loading from '../_commun/_Loading'

export default function VisitedProfile() {
  const axiosPrivate = useAxiosPrivate()

  const [user, setUser] = useState(null)
  const params = useParams()
  async function getUserById() {
    await axiosPrivate
      .get(`/api/user/get_user_by_id/${params.id}`)
      .then((response) => {
        setUser(response.data)
        return response.data
      })
  }
  useEffect(() => {
    getUserById()
    console.log(user)
  }, [])

  const page = (
    <div className='pt-16 bottom-16 overflow-hidden '>
      {user ? <div>{user.id}</div> : <Loading />}
    </div>
  )
  return <PageLayout page={page} />
}
