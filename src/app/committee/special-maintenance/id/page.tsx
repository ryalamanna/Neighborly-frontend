import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-2 py-5 mx-auto">
            <div className='flex justfy-between'>
                <div className="flex items-center w-full mb-10">
                    <i className="fa-solid fa-paint-roller mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                    <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900 mr-4">Title : </h1>
                    <p className='text-gray-500 pt-1 font-semibold text-lg'>Rain Harvesting</p>
                </div>
            </div>

            <div className="flex flex-row flex-wrap border-t border-b py-3">
                <div className='flex flex-col text-sm mr-20'>
                    <h2 className='font-medium'>Date</h2>
                    <p className='font-bold text-gray-800'>12 / 02 /2024</p>
                </div>
                <div className='flex flex-col text-sm mr-20'>
                    <h2 className='font-medium'>Cost</h2>
                    <p className='font-bold text-gray-800'>1200</p>
                </div>
                <div className='flex flex-col text-sm mr-20'>
                    <h2 className='font-medium'>Total Collected</h2>
                    <p className='font-bold text-gray-800'>180000</p>
                </div>
            </div>

            <div className="flex items-left mx-auto flex-col mt-6">
                <div className="flex-grow text-left border-b border-gray-200 pb-3 pt-3 ">
                    <h2 className="text-sm title-font font-medium mb-2">Description</h2>
                    <p className="text-sm text-gray-800 leading-relaxed font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque modi facere dolore porro magnam esse voluptatem sint quo amet, laboriosam sit odio! Sunt aperiam, in animi numquam facere delectus placeat tenetur repellendus eaque ullam voluptatem iusto quia, commodi inventore eos!</p>
                </div>
            </div>

            
            <div className='flex justfy-between items-center'>
                <div className="flex items-center w-full mb-10 mt-10">
                    <i className="fa-regular fa-folder-open mr-2 text-lg bg-sky-100 p-2 rounded"></i>
                    <h1 className="text-lg font-semibold title-font mb-0 text-gray-900 mr-4">Pending Payments</h1>
                </div>
                <div className=' w-full text-end'>
                    <Link href='fileName' className="py-2 mr-2 inline text-white bg-indigo-500 border-0 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-semibold">
                        Send Reminder <i className="ml-3 fa-regular fa-bell"></i>
                    </Link>
                </div>

            </div>

            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">SI no.</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">Appartment</th>
                        <th className=" w-[30%]  px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Download Document</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-200'>
                        <td className="px-4 py-3">1.</td>
                        <td className="px-4 py-3">A-222</td>
                        <td className="px-4 py-3 w-10  text-emerald-500">
                            <Link href='fileName' download={true} className="inline-block  text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                                Send <i className="ml-2 fa-regular fa-bell"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className='hover:bg-gray-200'>
                        <td className="px-4 py-3">1.</td>
                        <td className="px-4 py-3">A-101</td>
                        <td className="px-4 py-3 w-10  text-emerald-500">
                            <Link href='fileName' download={true} className="inline-block  text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                                Send <i className="ml-2 fa-regular fa-bell"></i>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default page