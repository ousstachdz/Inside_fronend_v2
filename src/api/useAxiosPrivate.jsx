import { axiosPrivate } from './axios'
import { useEffect } from 'react'
// import { Coockies } from 'js-cookie'
import Coockies from 'js-cookie'

import { userRefreshToken } from '../hooks/userRefreshToken'

export const useAxiosPrivate = () => {
  const refresh = userRefreshToken()

  useEffect(() => {
    const requestInstance = axiosPrivate.interceptors.request.use(
      (config) => {
        const access = Coockies.get('access')
        config.headers.Authorization = `Bearer ${access}`
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseInstance = axiosPrivate.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const prvRequest = error?.config
        if (error.response?.status == 401 && !prvRequest?.sent) {
          prvRequest.sent = true
          const access = await refresh()
          //   const access = Coockies.get('access')
          prvRequest.headers['Authorization'] = `Bearer ${access}`
          console.log(prvRequest)
          return await axiosPrivate(prvRequest)
        }
        return Promise.reject(error)
      }
    )
    return () => {
      axiosPrivate.interceptors.response.eject(responseInstance)
      axiosPrivate.interceptors.request.eject(requestInstance)
    }
  }, [refresh])

  return axiosPrivate
}
