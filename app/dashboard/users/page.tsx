import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-2xl'>Dashboard Users</h1>
      <ul className='mt-4'>
        <li>
          <Link href='users/1'>User 1</Link>
        </li>
        <li>
          <Link href='users/2'>User 2</Link>
        </li>
        <li>
          <Link href='users/3'>User 3</Link>
        </li>
        <li>
          <Link href='users/4'>User 4</Link>
        </li>
      </ul>
    </div>
  )
}

export default page
