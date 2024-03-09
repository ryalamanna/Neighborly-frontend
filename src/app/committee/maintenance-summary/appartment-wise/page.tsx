'use client'

import React, { useState } from 'react'

const page = () => {

    const [currentState, setcurrentState] = useState<'transaction' | 'pending'>('transaction')
  return (
            <section className="text-gray-600 body-font">
                <div className="container px-2 py-5 mx-auto">
                    <div className="flex items-center w-full mb-10">
                        <i className="fa-solid fa-money-check-dollar mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                        <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">
                            Appartment specific summary
                        </h1>
                    </div>
                    <div>
                        <select
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="">Select Appartment</option>
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

                    <div className="flex flex-row flex-wrap border-t border-y py-3 mt-6 px-3">
                        <div className='flex flex-col text-sm mr-20'>
                            <h2 className='font-medium'>Resident's Name</h2>
                            <p className='font-bold text-gray-800'>Ryal rafter amanna</p>
                        </div>
                        <div className='flex flex-col text-sm mr-20'>
                            <h2 className='font-medium'>Appartment Number</h2>
                            <p className='font-bold text-gray-800'>A-112</p>
                        </div>
                        <div className='flex flex-col text-sm mr-20'>
                            <h2 className='font-medium'>Phone Number</h2>
                            <p className='font-bold text-gray-800'>9876543217</p>
                        </div>
                        <button className="ml-auto flex-none text-white bg-indigo-500 border-0  px-2 focus:outline-none hover:bg-indigo-600 rounded text-s font-medium">
                        Send Reminder <i className="ml-3 fa-regular fa-bell"></i>
                        </button>
                    </div>

                    <div className="container  py-10 mx-auto">
                        <div className="mx-auto flex flex-wrap">
                            <div className="w-full lg:py-6 mb-6 lg:mb-0">
                                <div className="flex mb-4">
                                    <button onClick={()=>setcurrentState('transaction')} className={`${currentState === 'transaction' ? 'text-indigo-500 border-b-2 border-indigo-500' : '' } transition flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer`}>
                                        Transactions
                                    </button>
                                    <button onClick={()=>setcurrentState('pending')} className={`${currentState === 'pending' ? 'text-indigo-500 border-b-2 border-indigo-500' : '' } transition flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer`}>
                                        Pending Fee
                                    </button>
                                </div>

                                {
                                    (() => {
                                        switch (currentState) {
                                            case 'transaction':
                                                return (
                                                    <>
                                                        <table className="table-auto w-full text-left whitespace-no-wrap mt-10">
                                                            <thead>
                                                                <tr>
                                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">
                                                                        Date
                                                                    </th>
                                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                                                        Payment mode
                                                                    </th>
                                                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                                        Amount
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="border-b">
                                                                    <td className="px-4 py-3">
                                                                        March 22
                                                                    </td>
                                                                    <td className="px-4 py-3">Online</td>
                                                                    <td className="w-10 text-center font-semibold">
                                                                        1200
                                                                    </td>
                                                                </tr>
                                                                <tr className="border-b">
                                                                    <td className="px-4 py-3">Feb 04</td>
                                                                    <td className="px-4 py-3">Cash</td>
                                                                    <td className="w-10 text-center font-semibold">
                                                                        1200
                                                                    </td>
                                                                </tr>
                                                                <tr className="border-b">
                                                                    <td className="px-4 py-3">Jan 12</td>
                                                                    <td className="px-4 py-3">Online</td>
                                                                    <td className="w-10 text-center font-semibold">
                                                                        1200
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <div className="flex flex-col items-center mt-10">
                                                            <span className="text-sm text-gray-900">
                                                                Showing{' '}
                                                                <span className="font-semibold text-gray-500">
                                                                    1
                                                                </span>{' '}
                                                                to{' '}
                                                                <span className="font-semibold text-gray-500">
                                                                    10
                                                                </span>{' '}
                                                                of{' '}
                                                                <span className="font-semibold text-gray-500">
                                                                    100
                                                                </span>{' '}
                                                                Entries
                                                            </span>
                                                            <div className="inline-flex mt-2 xs:mt-0">
                                                                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-600 bg-gray-300 rounded-s hover:bg-gray-900  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">
                                                                    Prev
                                                                </button>
                                                                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-600 bg-gray-300 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">
                                                                    Next
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            case 'pending':
                                                return (
                                                    <table className="table-auto w-full text-left whitespace-no-wrap mt-10">
                                                        <thead>
                                                            <tr>
                                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">
                                                                    Month
                                                                </th>
                                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                                                    Pending amount
                                                                </th>
                                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                                    Reminder
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-3">
                                                                    March 2023
                                                                </td>
                                                                <td className="px-4 py-3">1000</td>
                                                                <td className="w-10 text-center font-semibold">
                                                                    <button className="flex-none text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-s font-medium">
                                                                        Send
                                                                        <i className="ml-3 fa-regular fa-bell"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
  );
}

export default page