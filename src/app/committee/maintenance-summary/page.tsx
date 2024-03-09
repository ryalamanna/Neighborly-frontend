import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
        <section className="text-gray-600 body-font">
          <div className="container px-2 py-5 mx-auto">
              <div className="flex items-center w-full mb-10">
                  <i className="fa-solid fa-money-check-dollar mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                  <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Maintenance Fee Summary</h1>
              </div>

              <div className="flex flex-wrap">

                <div  className="xl:w-1/3 md:w-1/2 p-4">
                  <Link href='/committee/maintenance-summary/appartment-wise' className="block border border-gray-200 px-6 py-4 rounded-lg transition hover:shadow-md">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <i className="fa-solid fa-building-user"></i>
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Appartment wise report</h2>
                    <p className="leading-relaxed text-base">This shows the maintenance fee report for each appartment.</p>
                  </Link>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <Link href='/committee/maintenance-summary/monthly-report' className="block border border-gray-200 px-6 py-4 rounded-lg  transition hover:shadow-md">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Month wise report</h2>
                    <p className="leading-relaxed text-base">This shows the maintenance fee report of all the appartments for the selected month.</p>
                  </Link>
                </div>

              </div>
              
          </div>
      </section>
  )
}

export default page