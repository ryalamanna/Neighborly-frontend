'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

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
    <div className="grid grid-cols-3 gap-5 ">

        <HomeCard title='Manage Ticket' iconClass='fa fa-ticket' link='/committee/manage-ticket'/>
        <HomeCard title='Maintenance Fee Summary' iconClass='fa-solid fa-money-check-dollar' link='/committee/maintenance-summary'/>
        <HomeCard title='Special Maintenance' iconClass='fa-solid fa-paint-roller' link='/committee/special-maintenance'/>
        <HomeCard title='Manage Expenses' iconClass='fa-solid fa-money-bill-transfer' link='/committee/manage-expenses'/>

    </div>
  )
}

export default page


function HomeCard({title , iconClass , link}: {title:string ; iconClass : string ; link : string;}){
    return (
        <div className="flex flex-col px-4 py-4 rounded-md bg-gray-100" >
            <h2 className='font-semibold text-gray-800 text-lg flex items-center'>
                <i className={`${iconClass} mr-3 text-xl`} aria-hidden="true"></i> 
                {title}
            </h2>
            <Link href={link} className="inline-block text-white bg-gray-700 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md mt-4 ml-auto">
                View
            </Link>
        </div>
    )
}