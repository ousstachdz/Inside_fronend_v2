import React from 'react'
import { motion } from 'framer-motion'

export default function PageLayout({ page }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className='main'
    >
      <div className='w-10/12 h-screen'>{page}</div>
    </motion.div>
  )
}
