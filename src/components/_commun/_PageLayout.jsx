import React from 'react'
import { motion } from 'framer-motion'

export default function PageLayout({ page }) {
  return (
    <div className='main'>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className='w-10/12 min-h-screen'
      >
        {page}
      </motion.div>
    </div>
  )
}
