import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">

            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                Dashboard
            </div>


            <nav className="flex flex-col mt-6 space-y-2 px-4">
                <Link
                    to="/users"
                    className="block px-4 py-2 rounded-lg hover:text-black hover:bg-white"
                >
                    Users
                </Link>
                <Link
                    to="/products"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Products
                </Link>

            </nav>
        </div>
    )
}

export default Sidebar
