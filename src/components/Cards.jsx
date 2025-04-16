import React from 'react'

function Cards({ icon, title, value }) {
    return (
        <div className='bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-6 hover:bg-slate-200'>
            <div className='text-3xl text-gray-500'>{icon}</div>
            <div>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className='text-xl'>{value}</p>
            </div>
        </div>
    )
}

export default Cards
