import axios from 'axios'
import Coockies from 'js-cookie'
import { userRefreshToken } from '../hooks/userRefreshToken'

export const BASE_URL = 'http://127.0.0.1:8000'

export default axios.create({
  baseURL: BASE_URL,
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
})
