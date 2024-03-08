import React from 'react'

const page = () => {
  return (
    <>
        {/* ==== SCREEN ONE ==== */}
        {/* <div className="flex items-center justify-center">
            <div className="flex-col items-center justify-center text-white text-center">
                <div className="flex items-center justify-center">
                    <div className="h-36 w-[90%] flex items-center justify-center md:text-4xl text-2xl lg:text-5xl font-bold ">
                        Visitors Entry
                    </div>
                </div>

                <div className="flex">
                    <div className="flex md:flex-row flex-col p-4 mt-10 space-x-10 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                        <button className="transition hover:scale-105 w-[200px] bg-gray-200 py-10 rounded-2xl flex items-center justify-center">
                            <div className="flex-col  items-center px-0 md:px-6">
                                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400  bg-clip-text text-transparent">
                                    Entry
                                </div>
                            </div>
                        </button>
                        <button className="transition hover:scale-105 w-[200px] bg-gray-200 py-10 rounded-2xl flex items-center justify-center">
                            <div className="flex-col  items-center px-0 md:px-6">
                                <div className="text-5xl font-bold bg-gradient-to-l from-fuchsia-500 to-orange-500  bg-clip-text text-transparent">
                                    Exit
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div> */}

        {/* ==== SCREEN TWO ==== */}
        {/* <section className="text-gray-400  body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Visitor Entry
                    </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Appartment Number
                                </label>
                                <select
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                    <option value="">Select Appartment</option>
                                    <option value="1">option 1</option>
                                    <option value="2">option 2</option>
                                    <option value="3">option 3</option>
                                    <option value="4">option 4</option>
                                    <option value="5">option 5</option>
                                    <option value="6">option 6</option>
                                    <option value="7">option 7</option>
                                    <option value="8">option 8</option>
                                    <option value="9">option 9</option>
                                    <option value="10">option 10</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Reason for visit
                                </label>
                                <div className="flex jistify-start flex-wrap mb-3">
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">General Visit</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Delivery/Packages</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Maintenance/Repair</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Meeting/Gathering</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Service provider</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Guest Entry</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Sales/Marketing</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Emergency</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Contractors</button>
                                    <button className="text-white hover:text-black hover:bg-white transition text-[10px] m-1 px-2 py-1 border rounded-full">Healthcare</button>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="px-2">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Add names of people with same reason for visit
                                </label>
                        </div>
                        <div className="w-full flex justify-between p-2 space-x-2">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="flex-grow flex-shrink-0 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            <button className="flex-none text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                +
                            </button>
                        </div>

                        <div className="p-2 w-full mt-4 flex justify-center ">
                            <button className="flex mx-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Cancel
                            </button>
                            <button className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* ==== SCREEN THREE ==== */}
        <section className="text-gray-400  body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Visitor Exit
                    </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                       
                        <div className="p-2 w-full">
                            <div className="relative ">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Appartment Number
                                </label>
                                <select
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                    <option value="">Select Appartment</option>
                                    {/* option{option $}*10 */}
                                    <option value="1">option 1</option>
                                    <option value="2">option 2</option>
                                    <option value="3">option 3</option>
                                    <option value="4">option 4</option>
                                    <option value="5">option 5</option>
                                    <option value="6">option 6</option>
                                    <option value="7">option 7</option>
                                    <option value="8">option 8</option>
                                    <option value="9">option 9</option>
                                    <option value="10">option 10</option>
                                    </select>
                            </div>
                        </div>
                        <div className="px-2 pt-3">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Select all people exiting
                                </label>
                        </div>
                        <div className="border-b-2 w-full flex justify-between p-2 space-x-2">
                            <label htmlFor="">Name one</label>
                            <input type='checkbox' className="flex-none text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"/>
                        </div>
                        <div className="border-b-2 w-full flex justify-between p-2 space-x-2">
                            <label htmlFor="">Name one</label>
                            <input type='checkbox' className="flex-none text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"/>
                        </div>
                        <div className="border-b-2 w-full flex justify-between p-2 space-x-2">
                            <label htmlFor="">Name one</label>
                            <input type='checkbox' className="flex-none text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"/>
                        </div>
                        <div className="border-b-2 w-full flex justify-between p-2 space-x-2">
                            <label htmlFor="">Name one</label>
                            <input type='checkbox' className="flex-none text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"/>
                        </div>
                        <div className="p-2 w-full mt-4 flex justify-center ">
                            <button className="flex mx-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Cancel
                            </button>
                            <button className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Exit Appartment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
}

export default page

{/* option{option $}*10 */}
