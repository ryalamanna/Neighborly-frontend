import React from 'react'
import Breadcrumb from '../components/BreadCrumb'

const layout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
    <div className='grid h-[100vh] grid-cols-5 p-4'>
        <div className="sidebar col-span-1 ">
            <div className='fixed top-0 p-5 pt-7'> 
                <div className="profile">
                    <a href="#">
                        <img className='rounded-lg' src="https://placehold.co/50" alt="Profile" />
                    </a>
                    <p className='text-white font-semibold text-md mt-2'>This is the name</p>
                    <p className='text-gray-400  font-light text-xs '>email@email.com</p>
                </div>
                <ul className='mt-20'>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 1</li>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 2</li>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 3</li>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 4</li>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 5</li>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 6</li>
                    <li className='py-2 text-gray-400 font-medium' >Menu item 7</li>
                </ul>
            </div>
        </div>
        <div className="main_section d-block h-full border col-span-4 bg-white rounded-2xl shadow-2xl p-5 overflow-y-scroll">
        <Breadcrumb
          homeElement={'Home'}
          separator={<span className='text-gray-400'> / </span>}
          activeClasses='text-amber-500 font-semibold'
          containerClasses='flex mb-5 px-3 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md' 
          listClasses='hover:underline mx-2 text-white'
          capitalizeLinks
        />
          {children}
        </div>
    </div>
    </>
  )
}

export default layout