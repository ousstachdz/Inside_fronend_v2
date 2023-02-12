import React, { useEffect } from 'react'
import Coockies from 'js-cookie'

import axios from '../api/axios'

export const userRefreshToken = () => {
  const refresh = async () => {
    const refreshToken = Coockies.get('refresh')
    await axios
      .post(`/api/token/refresh/`, { refresh: refreshToken })
      .then((response) => {
        const access = response.data.access
        Coockies.set('access', access)
      })
      .catch((error) => {
        Coockies.remove('refresh')
        Coockies.remove('access')
      })
    return Coockies.get('access')
  }
  return refresh
}
