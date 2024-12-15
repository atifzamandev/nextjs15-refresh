import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2 className='text-2xl text-red-700'>Dashboard Rout Groups</h2>
      {children}
    </div>
  )
}

export default layout
