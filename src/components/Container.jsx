import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({className, children}) => {
  const newClassName=twMerge('max-w-screen-2xl mx-auto mt-16 mb-2 px-4 bg-slate-300 pt-10', className)
  return (
    <div className={newClassName}>
      {children}
    </div>
  )
}

export default Container