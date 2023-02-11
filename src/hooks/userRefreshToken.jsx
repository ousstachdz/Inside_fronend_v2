import React, { useEffect } from 'react'
import axios from '../api/axios'
import Coockies from 'js-cookie'

export const userRefreshToken = async () => {
  let access = ''
  const refresh = Coockies.get('refresh')
  await axios
    .post(`/api/token/refresh/`, { refresh: refresh })
    .then((response) => {
      console.log('response')
      console.log(response)
      access = response.data.access
      Coockies.set('access', access)
    })
    .catch((error) => {
      Coockies.remove('refresh')
      Coockies.remove('access')
    })
}
