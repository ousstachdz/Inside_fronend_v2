import React, { useContext, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Coockies from 'js-cookie'

import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Dropdown({ isOpen, items, setIsOpen }) {
  const { setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  return isOpen ? (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='border_thin w-44 absolute   top-8 right-0 rounded-md bg-white '
    >
      <ul className='z-50'>
        {items.map((item) => {
          return (
            <li
              key={item.link}
              className='w-full flex justify-center items-center'
            >
              {item.link != 'logout' ? (
                <Link
                  className='w-full text-center btn btn_ghost'
                  to={item.link}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  className='w-full text-center btn btn_ghost'
                  onClick={() => {
                    Coockies.remove('access', { path: '/' })
                    Coockies.set('refresh', { path: '/' })
                    setIsAuth(false)
                    navigate('/')
                  }}
                >
                  Logout
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </motion.div>
  ) : (
    <div></div>
  )
}
