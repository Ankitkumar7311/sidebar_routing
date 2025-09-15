import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">

            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                Dashboard
            </div>

            <nav className="flex flex-col mt-6 space-y-2 px-4">
                <NavLink
                    to="/users"
                    className="block px-4 py-2 rounded-lg hover:text-black hover:bg-white"
                >
                    Users
                </NavLink>
                <NavLink
                    to="/products"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Products
                </NavLink>
                <NavLink
                    to="/carts"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Carts
                </NavLink>

                {/* ✅ Foods Route */}
                <NavLink
                    to="/foods"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Foods
                </NavLink>

                <NavLink
                    to="/login"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Login
                </NavLink>
                <NavLink
                    to="/signup"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Signup
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar
