import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemecContextProvider'
import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex items-center  justify-between
    dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
      <h1 className='font-bold text-lg'>Dashboard</h1>
      <button className='text-2xl text-dark' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    </div>
  )
}

export default Navbar
