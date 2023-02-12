import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

export default function SearchBox({ setKW }) {
  return (
    <div className='w-full flex justify-center my-8'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <div className='border_thin rounded-md w-full p-4 flex justify-around items-center'>
          <label htmlFor='kw' className='mx-2 hidden lg:inline-block'>
            Search
          </label>
          <input
            className='input input_lg m-2'
            type='text'
            onChange={(e) => {
              setKW(e.target.value)
            }}
            placeholder='Someone name ...'
          />
          <button className='btn btn_ghost m-2'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  )
}
