import React, { useEffect, useState } from 'react'
import { useAxiosPrivate } from '../../api/useAxiosPrivate'

export default function UserCardButton({ relation, id }) {
  const [button, setButton] = useState(null)
  const axiosPrivate = useAxiosPrivate()

  const sendRequest = () => {
    axiosPrivate
      .post('api/friendship/send_request/', { id })
      .then((response) => {
        if (response.status == 201) {
          relation.is_recieve_request = true
          setButton(findRelation)
        }
      })
  }
  const removeFriendOrRequest = () => {
    axiosPrivate
      .post('api/friendship/remove_friend/', { id })
      .then((response) => {
        if (response.status == 200) {
          relation.is_recieve_request = false
          relation.is_friend = false
          setButton(findRelation)
        }
      })
  }
  const acceptRequest = () => {
    axiosPrivate
      .post('api/friendship/accept_request/', { id })
      .then((response) => {
        if (response.status == 200) {
          relation.is_friend = true
          setButton(findRelation)
        }
      })
  }
  useEffect(() => {
    setButton(findRelation)
  }, [relation])

  const findRelation = () => {
    if (relation?.is_authenticated_user) {
      return null
    }
    if (relation?.is_friend) {
      return <button className='btn btn_ghost text-xs'>Friend</button>
    }
    if (relation?.is_recieve_request) {
      return (
        <button
          onClick={removeFriendOrRequest}
          className='btn btn_ghost text-xs '
        >
          Unfollow
        </button>
      )
    }
    if (relation?.is_send_request) {
      return (
        <button onClick={acceptRequest} className='btn btn_ghost text-xs px-0'>
          {' '}
          Follow Back{' '}
        </button>
      )
    }
    if (!relation?.is_friend) {
      return (
        <button onClick={sendRequest} className='btn btn_primary text-xs'>
          Follow
        </button>
      )
    }
  }

  return <div className='flex justify-end z-40'>{button}</div>
}
