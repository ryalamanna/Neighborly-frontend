import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-2 py-10 mx-auto">
            <div className='flex justfy-between'>
                <div className="flex items-center w-full mb-10">
                    <i className="fa-solid fa-plus mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                    <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900 mr-4">Add Expense</h1>
                </div>
                {/* <div className='pt-2 w-full text-end'>
                    <Link href='fileName' download={true} className="mr-2 inline text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Resolve</Link>
                    <Link href='fileName' download={true} className="inline text-white bg-green-400 border-0 py-1 px-4 focus:outline-none hover:bg-green-500 rounded text-sm">Close Request</Link>
                </div> */}
            </div>
            
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Date</label>
                        <input type="date" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Amount</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">category</label>
                        <select  id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <option>Select Category</option>
                        </select>
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Vendor / Recipient</label>
                        <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Payment method</label>
                        <select  id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <option>Select Method</option>
                        </select>
                    </div>
                </div>
                <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Receips / Documents</label>
                        <input type="file" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default page