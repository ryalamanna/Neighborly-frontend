'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

    const [currentState, setcurrentState] = useState<'All Expenses' | 'Summary'>('All Expenses')

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-5 mx-auto">
                <div className='flex justfy-between'>
                    <div className="flex items-center w-full mb-10">
                        <i className="fa-solid fa-money-bill-transfer mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                    <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Manage Expenses</h1>
                    </div>
                    <div className='pt-2 w-full text-end'>
                        <Link href='/committee/manage-expenses/add' className="mr-2 inline text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md font-medium">
                            <i className="fa-solid fa-plus mr-2"></i>
                            Add Expense
                        </Link>
                        <Link href='/committee/manage-expenses/expense-approval' className="mr-2 inline text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-md font-medium">
                            <i className="fa-solid fa-check-double mr-2"></i>
                            Expense Approval
                        </Link>
                        <Link href='/committee/manage-expenses/expense-approval' className="mr-2 inline text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-md font-medium">
                            <i className="fa-solid fa-file-csv mr-2"></i>
                            CSV
                        </Link>
                    </div>
                </div>

                <div className='flex gap-x-4 justify-between border-y-2 py-4'>
                    <div className='flex gap-x-4 flex-wrap'>
                        <p className='font-semibold w-full mb-2 ml-1 text-md'>From</p>
                        <select
                            id="name"
                            name="name"
                            className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="">Select Year</option>
                            <option value="">All Time</option>
                            <option value="">A-1</option>
                            <option value="">A-2</option>
                            <option value="">A-3</option>
                            <option value="">A-4</option>
                            <option value="">A-5</option>
                            <option value="">A-6</option>
                            <option value="">A-7</option>
                            <option value="">A-8</option>
                            <option value="">A-9</option>
                            <option value="">A-10</option>
                        </select>

                        <select
                            id="name"
                            name="name"
                            className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="">Select Month</option>
                            <option value="">All month</option>
                            <option value="">A-1</option>
                            <option value="">A-2</option>
                            <option value="">A-3</option>
                            <option value="">A-4</option>
                            <option value="">A-5</option>
                            <option value="">A-6</option>
                            <option value="">A-7</option>
                            <option value="">A-8</option>
                            <option value="">A-9</option>
                            <option value="">A-10</option>
                        </select>
                    </div>

                    <div className='flex gap-x-4 flex-wrap justify-end'>
                        <p className='font-semibold w-full mb-2 ml-1 text-md text-end'>To</p>
                        <select
                            id="name"
                            name="name"
                            className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="">Select Year</option>
                            <option value="">A-1</option>
                            <option value="">A-2</option>
                            <option value="">A-3</option>
                            <option value="">A-4</option>
                            <option value="">A-5</option>
                            <option value="">A-6</option>
                            <option value="">A-7</option>
                            <option value="">A-8</option>
                            <option value="">A-9</option>
                            <option value="">A-10</option>
                        </select>

                        <select
                            id="name"
                            name="name"
                            className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="">Select Month</option>
                            <option value="">A-1</option>
                            <option value="">A-2</option>
                            <option value="">A-3</option>
                            <option value="">A-4</option>
                            <option value="">A-5</option>
                            <option value="">A-6</option>
                            <option value="">A-7</option>
                            <option value="">A-8</option>
                            <option value="">A-9</option>
                            <option value="">A-10</option>
                        </select>
                    </div>
                </div>

                <div className="container  py-10 mx-auto">
                
                    <div className="mx-auto flex flex-wrap">
                        <div className="w-full  lg:py-6 mb-6 lg:mb-0">
                            <div className="flex mb-4">
                                <button onClick={()=>setcurrentState('All Expenses')} className={`${currentState === 'All Expenses' ? 'text-indigo-500 border-b-2 border-indigo-500' : '' } transition flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer `}>
                                    All Expenses
                                </button>
                                <button onClick={()=>setcurrentState('Summary')} className={`${currentState === 'Summary' ? 'text-indigo-500 border-b-2 border-indigo-500' : '' } transition flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer `}>
                                    Summary
                                </button>
                            </div>

                            {
                                (() => {
                                    switch (currentState) {
                                        
                                        case 'All Expenses':
                                            return (
                                                <table className="table-auto w-full text-left whitespace-no-wrap mt-10">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">
                                                                Date
                                                            </th>
                                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">
                                                                Expense Title
                                                            </th>
                                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                                                Amount
                                                            </th>
                                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr className="border-b">
                                                            <td className="px-4 py-1">
                                                                13 / 02 / 2024
                                                            </td>
                                                            <td className="px-4 py-1">
                                                                Electricity bill
                                                            </td>
                                                            <td className="px-4 py-1">10000</td>
                                                            <td className="w-20 px-4 py-1 flex">
                                                                <button className="bg-gray-300 p-1 px-2 rounded m-1 hover:scale-110 transition">
                                                                    <i className="fa-regular fa-eye text-blue-950 "></i>
                                                                </button>
                                                                <button className="bg-yellow-300 p-1 px-2 rounded m-1 hover:scale-110 transition">
                                                                    <i className="fa-regular fa-pen-to-square text-blue-950 "></i>
                                                                </button>
                                                                <button className="bg-red-400 p-1 px-2 rounded m-1 hover:scale-110 transition">
                                                                    <i className="fa-regular fa-trash-can text-blue-950"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            );
                                        case 'Summary':
                                            return (
                                                <>
                                                    <div className="flex flex-col flex-wrap px-5">
                                                        <div className='w-full flex justify-between border-b py-3'>
                                                            <div className='flex flex-col text-sm '>
                                                                <h2 className='font-medium text-base'>Total Appartments</h2>
                                                                <p className='font-bold text-2xl text-gray-800'>100</p>
                                                            </div>
                                                            <div className='flex flex-col text-sm items-end'>
                                                                <h2 className='font-medium text-base'>Appartments Sold</h2>
                                                                <p className='font-bold text-2xl text-gray-800'>88</p>
                                                            </div>
                                                        </div>

                                                        <div className='w-full flex justify-between border-b py-3'>
                                                            <div className='flex flex-col text-sm '>
                                                                <h2 className='font-medium text-base'>Summary Maintenance</h2>
                                                                <p className='font-bold text-2xl text-gray-800'>12</p>
                                                            </div>
                                                            <div className='flex flex-col text-sm items-end'>
                                                                <h2 className='font-medium text-base'>paid Maintenance</h2>
                                                                <p className='font-bold text-2xl text-gray-800'>12</p>
                                                            </div>
                                                        </div>

                                                        <div className='w-full flex justify-between border-b py-3'>
                                                            <div className='flex flex-col text-sm '>
                                                                <h2 className='font-medium text-base'>Summary percentage</h2>
                                                                <p className='font-bold text-2xl text-gray-800'>88%</p>
                                                            </div>
                                                            <div className='flex flex-col text-sm items-end'>
                                                                <h2 className='font-medium text-base'>paid percentage</h2>
                                                                <p className='font-bold text-2xl text-gray-800'>12%</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                            );
                                        default:
                                            return null; // or any other default JSX element
                                    }
                                })()
                            }

                        </div>
                    </div>
                </div>
                
            </div>
        </section>
  )
}

export default page