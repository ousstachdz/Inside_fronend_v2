import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faGears,
  faSearch,
  faPlus,
  faRightFromBracket,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

import { AuthContext } from '../../../context/AuthContext'
import Dropdown from '../_Dropdown'

export default function NavbarItems() {
  const { isAuth, isLoading } = useContext(AuthContext)

  const [isOpenSetting, setIsOpenSetting] = useState(false)
  const [isOpenProfile, setIsOpenProfile] = useState(false)

  const toggoleMenu = (setIsOpen, isOpen) => {
    if (!isOpen) {
      closeAllMenus()
      setIsOpen(!isOpen)
    } else {
      closeAllMenus()
    }
  }

  const closeAllMenus = () => {
    setIsOpenSetting(false)
    setIsOpenProfile(false)
  }

  const itemsSetting = [
    { title: 'setting', link: 'setting' },
    { title: 'logout', link: 'logout' },
  ]

  const itemsProfile = [
    { title: 'profile', link: '/' },
    { title: 'messages', link: 'messages' },
  ]

  return (
    <>
      {isOpenSetting || isOpenProfile ? (
        <button
          className='absolute w-full h-full top-0 bottom-0 left-0 right-0 z-40'
          onClick={() => {
            closeAllMenus()
          }}
        ></button>
      ) : null}
      {isLoading ? null : isAuth ? (
        <ul className='w-28 sm:w-32 flex justify-between items-center'>
          <li className='relative'>
            <Link to={'/search'}>
              <p>
                <FontAwesomeIcon
                  className='  w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
                  icon={faSearch}
                />
              </p>
            </Link>
          </li>
          <li className='relative'>
            <button
              onClick={() => {
                toggoleMenu(setIsOpenProfile, isOpenProfile)
              }}
            >
              <FontAwesomeIcon
                className='  w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
                icon={faUser}
              />
            </button>
            <Dropdown
              isOpen={isOpenProfile}
              setIsOpen={setIsOpenProfile}
              items={itemsProfile}
            />
          </li>
          <li className='relative'>
            <button
              onClick={() => {
                toggoleMenu(setIsOpenSetting, isOpenSetting)
              }}
            >
              <FontAwesomeIcon
                className='  w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
                icon={faGears}
              />
            </button>
            <Dropdown
              isOpen={isOpenSetting}
              setIsOpen={setIsOpenSetting}
              items={itemsSetting}
            />
          </li>
        </ul>
      ) : (
        <div className='w-28 sm:w-32'>
          <ul className='  flex justify-between items-center '>
            <li className='ml-8 block sm:hidden'>
              <Link to={'login'} className=' '>
                <p>
                  <FontAwesomeIcon
                    className='w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
                    icon={faRightToBracket}
                  />
                </p>
              </Link>
            </li>
            <li className='block sm:hidden'>
              <Link to={'register'} className=''>
                <p>
                  <FontAwesomeIcon
                    className='  w-5 h-5 overflow-hidden aspect-auto text-gray-700 rounded-full'
                    icon={faPlus}
                  />
                </p>
              </Link>
            </li>
          </ul>

          <ul className='  flex justify-between items-center sm:-translate-x-20 '>
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
        </div>
      )}
    </>
  )
}
