import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGears } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Dropdown from './_Dropdown'

export default function Navbar() {
  const auth = useContext(AuthContext)
  const [isOpenSetting, setIsOpenSetting] = useState(false)
  const [isOpenProfile, setIsOpenProfile] = useState(false)

  const closeAllMenus = () => {
    setIsOpenSetting(false)
    setIsOpenProfile(false)
  }
  const toggoleMenu = (setIsOpen, isOpen) => {
    if (!isOpen) {
      closeAllMenus()
      setIsOpen(!isOpen)
    } else {
      closeAllMenus()
    }
  }

  const itemsSetting = [
    { title: 'setting', link: '#setting' },
    { title: 'logout', link: '#logout' },
  ]

  const itemsProfile = [
    { title: 'profile', link: '#profile' },
    { title: 'messages', link: '#messages' },
  ]

  return (
    <nav className='flex fixed justify-center items-center h-16 w-full  border_thin bg-white z-50'>
      <div className='w-10/12 flex justify-between items-center'>
        <Link to={'/'} className='text-xl'>
          InSide
        </Link>
        <>
          {auth ? (
            <ul className='sm:w-24 w-16 flex justify-between items-center'>
              <li className='relative'>
                <button
                  onClick={() => {
                    toggoleMenu(setIsOpenSetting, isOpenSetting)
                  }}
                >
                  <FontAwesomeIcon
                    className='  w-7 h-7 overflow-hidden aspect-auto text-gray-700 rounded-full'
                    icon={faGears}
                  />
                </button>
                <Dropdown
                  isOpen={isOpenSetting}
                  setIsOpen={setIsOpenSetting}
                  items={itemsSetting}
                />
              </li>
              <li className='relative'>
                <button
                  onClick={() => {
                    toggoleMenu(setIsOpenProfile, isOpenProfile)
                  }}
                >
                  <FontAwesomeIcon
                    className='  w-6 h-6 overflow-hidden aspect-auto text-gray-700 rounded-full'
                    icon={faUser}
                  />
                </button>
                <Dropdown
                  isOpen={isOpenProfile}
                  setIsOpen={setIsOpenProfile}
                  items={itemsProfile}
                />
              </li>
            </ul>
          ) : (
            <ul className='  flex justify-between items-center'>
              <li className='hidden sm:block'>
                <NavLink to={'login'} className='btn btn_ghost '>
                  login
                </NavLink>
              </li>
              <li className='hidden sm:block'>
                <NavLink to={'register'} className='btn btn_ghost '>
                  register
                </NavLink>
              </li>
            </ul>
          )}
        </>
      </div>
    </nav>
  )
}
