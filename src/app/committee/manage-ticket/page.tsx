import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-10 mx-auto">
                <div className="flex items-center w-full mb-10">
                    <i className="fa-solid fa-ticket mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                    <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Manage Tickets</h1>
                </div>
                <div className=" w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className=" w-[20%] px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">Ticket ID</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Subject</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-emerald-500">Closed</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-emerald-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-emerald-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/manage-ticket/id'>123456</Link></td>
                                <td className="px-4 py-3">service required</td>
                                <td className="w-10 text-center text-red-500">Open</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default page