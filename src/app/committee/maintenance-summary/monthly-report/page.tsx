"use client"
import React, { useState } from 'react'

const page = () => {

    const [currentState, setcurrentState] = useState<'summary' | 'pending'>('summary')

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-2 py-5 mx-auto">
            <div className="flex items-center w-full mb-10">
                <i className="fa-solid fa-calendar-days mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Monthly wise report</h1>
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
                            <button onClick={()=>setcurrentState('summary')} className={`${currentState === 'summary' ? 'text-indigo-500 border-b-2 border-indigo-500' : '' } transition flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer `}>
                                summary
                            </button>
                            <button onClick={()=>setcurrentState('pending')} className={`${currentState === 'pending' ? 'text-indigo-500 border-b-2 border-indigo-500' : '' } transition flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer `}>
                                Pending Fee
                            </button>
                        </div>

                        {
                            (() => {
                                switch (currentState) {
                                    case 'summary':
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
                                                            <h2 className='font-medium text-base'>Pending Maintenance</h2>
                                                            <p className='font-bold text-2xl text-gray-800'>12</p>
                                                        </div>
                                                        <div className='flex flex-col text-sm items-end'>
                                                            <h2 className='font-medium text-base'>paid Maintenance</h2>
                                                            <p className='font-bold text-2xl text-gray-800'>12</p>
                                                        </div>
                                                    </div>

                                                    <div className='w-full flex justify-between border-b py-3'>
                                                        <div className='flex flex-col text-sm '>
                                                            <h2 className='font-medium text-base'>Pending percentage</h2>
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
                                    case 'pending':
                                        return (
                                            <table className="table-auto w-full text-left whitespace-no-wrap mt-10">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-br rounded-tr">
                                                            Appartment
                                                        </th>
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
                                                            A-133
                                                        </td>
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
                                                    <tr className="border-b">
                                                        <td className="px-4 py-3">
                                                            B-113
                                                        </td>
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
  )
}

export default page