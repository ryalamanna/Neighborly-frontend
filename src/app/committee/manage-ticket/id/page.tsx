import React from 'react'
import MainLayout from '../../main-layout/layout'
import Link from 'next/link'

const page = () => {
  return (
    <MainLayout>
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-10 mx-auto">
                <div className='flex justfy-between'>
                    <div className="flex items-center w-full mb-10">
                        <i className="fa-solid fa-ticket mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                        <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900 mr-4">Ticket ID : </h1>
                        <p className='text-gray-500 pt-1'>123456</p>
                    </div>
                    <div className='pt-2 w-full text-end'>
                        <Link href='fileName' download={true} className="mr-2 inline text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Resolve</Link>
                        <Link href='fileName' download={true} className="inline text-white bg-green-400 border-0 py-1 px-4 focus:outline-none hover:bg-green-500 rounded text-sm">Close Request</Link>
                    </div>

                </div>

                <div className="flex flex-row flex-wrap border-t border-b py-3">
                    <div className='flex flex-col text-sm mr-20'>
                        <h2 className='font-medium'>Status</h2>
                        <p className='font-bold text-gray-800'>Open</p>
                    </div>
                    <div className='flex flex-col text-sm mr-20'>
                        <h2 className='font-medium'>Appartment Number</h2>
                        <p className='font-bold text-gray-800'>A-112</p>
                    </div>
                    <div className='flex flex-col text-sm mr-20'>
                        <h2 className='font-medium'>Phone Number</h2>
                        <p className='font-bold text-gray-800'>9876543217</p>
                    </div>
                </div>

                <div className="flex items-left mx-auto flex-col mt-10">
                    <div className="flex-grow text-left border-b border-gray-200 pb-3 pt-3 ">
                        <h2 className="text-sm title-font font-medium mb-2">Subject</h2>
                        <p className="text-sm text-gray-800  leading-relaxed font-semibold">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    </div>
                    <div className="flex-grow text-left border-b border-gray-200 pb-3 pt-3 ">
                        <h2 className="text-sm title-font font-medium mb-2">Request Type</h2>
                        <p className="text-sm text-gray-800 leading-relaxed font-semibold">post-ironic four</p>
                    </div>
                    <div className="flex-grow text-left border-b border-gray-200 pb-3 pt-3 ">
                        <h2 className="text-sm title-font font-medium mb-2">Description</h2>
                        <p className="text-sm text-gray-800 leading-relaxed font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque modi facere dolore porro magnam esse voluptatem sint quo amet, laboriosam sit odio! Sunt aperiam, in animi numquam facere delectus placeat tenetur repellendus eaque ullam voluptatem iusto quia, commodi inventore eos!</p>
                    </div>
                    <div className="flex-grow text-left border border-gray-200 pb-3 pt-3 mt-3 px-2 rounded bg-gray-100">
                        <h2 className="text-sm title-font font-medium mb-2">Resolution</h2>
                        <p className="text-sm text-gray-800 leading-relaxed font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque modi facere dolore porro magnam esse voluptatem sint quo amet, laboriosam sit odio! Sunt aperiam, in animi numquam facere delectus placeat tenetur repellendus eaque ullam voluptatem iusto quia, commodi inventore eos!</p>
                    </div>
                </div>

                <div className="flex items-center w-full mb-10 mt-10">
                    <i className="fa-regular fa-folder-open mr-2 text-lg bg-sky-100 p-2 rounded"></i>
                    <h1 className="text-lg font-semibold title-font mb-0 text-gray-900 mr-4">Documents</h1>
                </div>
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">Name</th>
                            <th className=" w-[40%]  px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Download Document</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='hover:bg-gray-200'>
                            <td className="px-4 py-3">File name 1</td>
                            <td className="px-4 py-3 w-10  text-emerald-500">
                                <Link href='fileName' download={true} className="inline-block  text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Download</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </section>
    </MainLayout>
  )
}

export default page