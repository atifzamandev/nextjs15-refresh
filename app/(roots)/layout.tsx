import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className='text-2xl'>NavBar</h1>
      {children}
    </div>
  )
}

export default layout
