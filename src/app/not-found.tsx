import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col bg-gray-100 '>
        <div className='border-2 rounded-xl p-10 bg-gray-200 flex flex-col gap-3'>
            <h1 className='text-4xl font-bold text-gray-700'>404 - Page Not Found</h1>
            <p className='text-gray-500'>The page you are looking for does not exist.</p>
            <Link href="/">
            <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                Go to home
            </Button>
            </Link>
            
        </div>
    </div>
  )
}

export default NotFound
