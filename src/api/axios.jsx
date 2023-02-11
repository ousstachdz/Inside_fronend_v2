import axios from 'axios'
import Coockies from 'js-cookie'
import { userRefreshToken } from '../hooks/userRefreshToken'

export const BASE_URL = 'http://127.0.0.1:8000'

export default axios.create({
  baseURL: BASE_URL,
})

const instance = axios.create({
  baseURL: BASE_URL,
})
export const axiosPrivate = instance

instance.interceptors.request.use((request) => {
  const access = Coockies.get('access')
  request.headers.Authorization = `Bearer ${access}`
  return request
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const prvRequest = error?.config
    if (error.response.status == 401 && prvRequest?.sent) {
      Coockies.remove('access')
      Coockies.remove('refresh')
      console.log('refresh')
      return error
    }
    if (error.response.status == 401 && !prvRequest?.sent) {
      console.log('test ')
      prvRequest.sent = true
      await userRefreshToken()
      console.log('userRefreshToken ')
      const access = Coockies.get('access')
      prvRequest.headers['Authorization'] = access
      console.log(prvRequest)
      return await axiosPrivate(prvRequest)
    }
  }
)
