import React from 'react'

const page = () => {
  return (
    <div >
        <div className="flex justify-center ">
            <div
                className="flex  justify-center  shadow max-w-7xl w-[40%] rounded-lg  bg-gradient-to-bl  m-4 mt-10">
                
                <div className="h-[90%] w-full mt-7">
                    {/* <div className="mb-6 text-white">
                        <a href="#" className="flex justify-end mr-8 space-x-2 hover:underline underline-offset-4">
                            <h1>Signup</h1>
                            <i className="fa-solid fa-arrow-right-long mt-[6px]"></i>
                        </a> 
                    </div> */}
                    <div className=" flex flex-col justify-center items-center space-y-2">
                        <div>
                            <h1 className="text-xl font-bold text-white">Neighbourly</h1>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center space-y-2">
                        <div>
                            <h1 className="text-lg mt-5 font-semibold text-gray-200">Login</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-7 space-y-6 md:space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-base text-gray-200">Email</h1>
                            <input type="email" placeholder=""
                                className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-base text-gray-200">Password</h1>
                            <input type="password" placeholder=""
                                className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <button
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium ">login</button>
                    </div>
                    <div className="text-center my-6">
                        <a href="#" className="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4">Forgot your
                            Password ?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page