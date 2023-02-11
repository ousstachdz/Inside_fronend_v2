import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../_commun/_PageLayout'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const page = (
    <div className='flex h-full flex-col md:flex-row'>
      <div className=' w-full md:w-1/2 relative flex flex-col justify-center text-center md:text-start pt-32 md:p-0'>
        <h1 className='text-6xl py-2'>Sign Up</h1>
        <h2 className='text-3xl capitalize py-2'>
          Join now and
          <span className='text-blue-600 dark:text-blue-500'> start </span>
          creating meaningful connections.
        </h2>
        <p className='text-gray-700'>
          Meet new people, discover new cultures, and make lasting connections.
          Log in now to join the conversation and be a part of a growing
          community.
        </p>
      </div>
      <div className='w-full md:w-1/2  relative flex justify-center md:justify-end items-center'>
        <form className=' flex flex-col  border_thin py-8 p-6 rounded-md my-20 '>
          <div className='flex justify-between'>
            <div className='flex flex-col '>
              <label className='label' htmlFor='firstname'>
                Firstname:
              </label>
              <input id='firstname' type='text' className='input input-sm' />
            </div>
            <div className='flex flex-col'>
              <label className='label' htmlFor='lastname'>
                Lastname:
              </label>
              <input id='lastname' type='text' className='input input-sm' />
            </div>
          </div>

          <label className='label' htmlFor='username'>
            Username:
          </label>
          <input id='username' type='text' className='input input-lg' />
          <label className='label' htmlFor='username'>
            Password:
          </label>
          <input id='password' type='password' className='input input-lg' />
          <label className='label' htmlFor='username'>
            Confirm Password:
          </label>
          <input id='password' type='password' className='input input-lg' />
          <Link className='text-md px-1 py-2 text-blue-500' to='/login'>
            You already have an account ?
          </Link>
          <input className='btn btn_primary' type='submit' value='register' />
        </form>
      </div>
    </div>
  )
  return <PageLayout page={page} />
}
