import React from 'react'
import { MdDashboardCustomize } from "react-icons/md"
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='bg-gray-100 fixed w-16 md:w-64 border-r h-screen px-4 border-gray-300 text-gray-900
     dark:border-gray-600 dark:bg-gray-900 dark:text-white '>
        <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Shoppers</h1>
        <ul className='flex flex-col mt-5 text-xl '>
            <li className='flex items-center py-2 space-x-4 px-2 hover:rounded hover:cursor-pointer
             hover:bg-slate-500 hover:text-white'>
                <MdDashboardCustomize/>
                <span className='hidden md:inline '>Dashboard</span>
            </li>
            <li className='flex items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer
             hover:bg-slate-500 hover:text-white'>
                <FaCartShopping/>
                <span className='hidden md:inline '>Orders</span>
            </li>
            <li className='flex items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer
             hover:bg-slate-500 hover:text-white'>
                <FaUsers/>
                <span className='hidden md:inline '>Customers</span>
            </li>
            <li className='flex items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer
             hover:bg-slate-500 hover:text-white'>
                <FaUserTie/> 
                <span className='hidden md:inline '>Users</span>
            </li>
            <li className='flex items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer
             hover:bg-slate-500 hover:text-white'>
                <FaBox/>
                <span className='hidden md:inline '>Products</span>
            </li>
            <li className='flex items-center py-2 px-2 space-x-4 hover:rounded hover:cursor-pointer
             hover:bg-slate-500 hover:text-white'>
                <IoSettings/>
                <span className='hidden md:inline '>Settings</span>
            </li>
        </ul> 
    </div>
  )
}

export default Sidebar
