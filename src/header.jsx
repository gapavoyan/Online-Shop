import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
function Header() {
  const selector = useSelector((store)=>store.product.product)
    return (
        <header>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ul className='flex items-center'>
                                        <li>
                                            <NavLink to="/home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/basket" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><i className="fa-solid fa-basket-shopping"></i></NavLink>
                                            <span className='relative -top-2 -left-3 text-blue-300 text-xs'>{selector.length}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header