import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../_commun/_PageLayout'
import { useFormik } from 'formik'
import { loginSchema } from '../../validationSchema/loginSchema'
import Authenticate from './Authenticate'

export default function Login() {
  const { errorMessage, onSubmit } = Authenticate()
  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: onSubmit,
  })

  const page = (
    <div className='flex h-full flex-col md:flex-row'>
      <div className=' w-full md:w-1/2 relative flex flex-col justify-center text-center md:text-start pt-32 md:p-0'>
        <h1 className='text-6xl py-2'>Login</h1>
        <h2 className='text-3xl capitalize py-2'>
          Express{' '}
          <span className='text-blue-600 dark:text-blue-500'>yourself </span>
          like never before.
        </h2>
        <p className='text-gray-700'>
          Meet new people, discover new cultures, and make lasting connections.
          Log in now to join the conversation and be a part of a growing
          community.
        </p>
      </div>
      <div className='w-full md:w-1/2  relative flex justify-center md:justify-end items-center'>
        <form
          autoComplete='off'
          onSubmit={handleSubmit}
          className=' flex flex-col  border_thin py-8 p-6 rounded-md my-20 '
        >
          <label className='label' htmlFor='email'>
            email:
          </label>
          <input
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type='email'
            name='email'
            className={`input input-lg ${errors.email ? 'error' : null}`}
          />
          <div className='text-xs  px-2 pb-2'>
            <div className='text-red-600 dark:text-red-400'>{errors.email}</div>
          </div>
          <label className='label' htmlFor='password'>
            Password:
          </label>
          <input
            id='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name='password'
            type='password'
            className={`input input-lg ${errors.password ? 'error' : null}`}
          />
          <div className='text-xs  px-2 pb-2'>
            <div className='text-red-600 dark:text-red-400'>
              {errors.password}
            </div>
          </div>
          <Link className='text-md px-1 py-2 text-blue-500' to='/register'>
            You don't have an account ?
          </Link>
          {errorMessage ? (
            <div className='alert-error'>{errorMessage}</div>
          ) : null}
          <button className='btn btn_primary' type='submit'>
            login
          </button>
        </form>
      </div>
    </div>
  )
  return <PageLayout page={page} />
}
