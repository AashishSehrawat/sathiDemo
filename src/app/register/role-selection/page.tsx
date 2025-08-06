import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../assets/logo.png";
import studentIcon from "../../../assets/studentIcon.png";

export default function RoleSelection() {
  return (
    <div className='w-full h-[92vh]'>
        <div className='pt-2 pl-2 w-fit'>
          <Link href="/">
            <Image src={logo} alt="Logo" width={200} />
          </Link>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center h-full'>
            <h2 className='text-4xl pb-6 font-bold '>Choose your role</h2>
            <div className='space-y-4 flex gap-6'>
                <Link href="/register/student" className='flex flex-col gap-2 items-center'>
                    <Image src={studentIcon} alt="Student logo" width={200} className='rounded-xl shadow-md hover:bg-blue-300 hover:border-0 transition-all' />
                    <span className='text-2xl'>Student</span>
                </Link>
                <Link href="/register/mentor" className='flex flex-col gap-2 items-center'>
                    <Image src={studentIcon} alt="Student logo" width={200} className='rounded-xl shadow-md hover:bg-blue-300 hover:border-0 transition-all' />
                    <span className='text-2xl'>Mentor</span>
                </Link>
            </div>
        </div>
    </div>
  )
}
