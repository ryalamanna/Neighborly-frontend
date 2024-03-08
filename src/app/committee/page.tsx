'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Mainlayout from './main-layout/layout'

const page = () => {
    
    const handleConfirm = () => {
        // if (window.confirm("Want to Login for Visitors Entry?")) {
        //     router.push('/committee/visitors-entry');
        // }
    };

    
    const router = useRouter();
    useEffect(() => {
        handleConfirm(); 
    }, [])
    
  return (
    <Mainlayout>
        <div className="grid grid-cols-3 gap-5 ">

              <div className="flex flex-col border px-4 py-3 rounded-md bg-gray-200" >
                  <h2 className='font-semibold text-gray-800 text-sm'>
                      <i className="fa fa-ticket mr-2" aria-hidden="true"></i> 
                      Manage Ticket
                  </h2>
                  <Link href='/committee/manage-ticket' className="inline-block text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4 ml-auto">
                      Manage
                  </Link>
              </div>

              <div className="flex flex-col border px-4 py-3 rounded-md bg-gray-200" >
                  <h2 className='font-semibold text-gray-800 text-sm'>
                      <i className="fa-solid fa-money-check-dollar mr-2" aria-hidden="true"></i> 
                      Maintenance Fee Summary
                  </h2>
                  <Link href='/committee/maintenance-summary' className="inline-block text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4 ml-auto">
                      View
                  </Link>
              </div>

            </div>
    </Mainlayout>
  )
}

export default page