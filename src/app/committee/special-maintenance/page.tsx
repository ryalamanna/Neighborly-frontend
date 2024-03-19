import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-5 mx-auto">
                <div className="flex items-center w-full mb-10">
                    <i className="fa-solid fa-paint-roller mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                    <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Special Maintenance</h1>
                </div>
                <div className=" w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Title</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">date</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Cost</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total Collected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:bg-gray-200'>
                                <td className="px-4 py-3"><Link className='text-sky-800 font-semibold hover:underline' href='/committee/special-maintenance/id'>Rain Harvesting</Link></td>
                                <td className="px-4 py-3">12 / 02 / 2024</td>
                                <td className="px-4 py-3">1200</td>
                                <td className="px-4 py-3">180000</td>
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