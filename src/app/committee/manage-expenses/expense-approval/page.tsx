import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
            <div className="container px-2 py-5 mx-auto">
                <div className='flex justfy-between'>
                    <div className="flex items-center w-full mb-10">
                        <i className="fa-solid fa-money-bill-transfer mr-2 text-xl bg-sky-100 p-3 rounded"></i>
                    <h1 className="text-2xl font-semibold title-font mb-0 text-gray-900">Manage Expenses</h1>
                    </div>
                    {/* <div className='pt-2 w-full text-end'>
                        <Link href='/committee/manage-expenses/add' className="mr-2 inline text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-medium">
                            <i className="fa-solid fa-plus mr-2"></i>
                            Add Expense
                        </Link>
                        <Link href='/committee/manage-expenses/expense-approval' className="mr-2 inline text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-sm font-medium">
                            <i className="fa-solid fa-check-double mr-2"></i>
                            Expense Approval
                        </Link>
                    </div> */}
                </div>

                <table className="table-auto w-full text-left whitespace-no-wrap mt-2">
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
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                Status
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
                            <td className="px-4 py-1 text-yellow-500">Revied</td>
                            <td className="w-20 px-4 py-1 flex">
                                <button className="bg-gray-300 p-1 px-2 rounded m-1 hover:scale-110 transition">
                                    <i className="fa-regular fa-eye text-blue-950 "></i>
                                </button>
                            
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="px-4 py-1">
                                13 / 02 / 2024
                            </td>
                            <td className="px-4 py-1">
                                Electricity bill
                            </td>
                            <td className="px-4 py-1">10000</td>
                            <td className="px-4 py-1 text-red-500">Pending</td>
                            <td className="w-20 px-4 py-1 flex">
                                <button className="bg-gray-300 p-1 px-2 rounded m-1 hover:scale-110 transition">
                                    <i className="fa-regular fa-eye text-blue-950 "></i>
                                </button>
                            
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>
        </section>
  )
}

export default page