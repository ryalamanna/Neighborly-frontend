import React from 'react'
import MainLayout from '../main-layout/layout'

const page = () => {
  return (
    <MainLayout>
        <section className="text-gray-600 body-font">
                <div className="container px-2 py-10 mx-auto">
                    <div className="flex items-center w-full mb-10">
                        <i className="fa-solid fa-money-check-dollar mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                        <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Maintenance Fee Summary</h1>
                    </div>
                    
                </div>
            </section>
    </MainLayout>
  )
}

export default page