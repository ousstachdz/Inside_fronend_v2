import { useState } from 'react'
import axios from '../../api/axios'
import Coockies from 'js-cookie'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Authenticate() {
  const [errorMessage, setErrorMessage] = useState(null)
  const { setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setErrorMessage(null)
    await axios
      .post('/api/token/', data)
      .then((response) => {
        const access = response.data.access
        const refresh = response.data.refresh
        Coockies.set('access', access, { secure: true })
        Coockies.set('refresh', refresh, { secure: true })
        setIsAuth(true)
        navigate('/')
      })
      .catch((error) => {
        setErrorMessage(error.response.data['detail'] + '.')
      })
  }

  return { errorMessage, onSubmit }
}
