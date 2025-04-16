import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaBox, FaUsers } from 'react-icons/fa6'
import { IoSettings } from "react-icons/io5";
import {Line, Bar} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

import Cards from './Cards'
import { dataBar, dataLine } from '../assets/ChartData';

const Dashboard = () => {
    return (
        <div className='grow p-8'>
            <h1 className='text-2xl mb-4'>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 cursor-pointer'>
                <Cards icon={<FaShoppingCart />} title="Orders" value="120" />
                <Cards icon={<FaBox />} title="Products" value="140" />
                <Cards icon={<FaUsers />} title="Users" value="30" />
                <Cards icon={<IoSettings />} title="Setting" value="12" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                <Line data={dataLine} />
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                <Bar data={dataBar} />
            </div>
        </div>
        </div>
    )
}

export default Dashboard
