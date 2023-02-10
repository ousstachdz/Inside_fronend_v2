import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function Dropdown({ isOpen, items }) {
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
              <a href={item.link} className='w-full text-center btn btn_ghost'>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </motion.div>
  ) : (
    <div></div>
  )
}
