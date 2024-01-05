// import React from 'react'

import SummaryBox from '../components/SummaryBox'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div className='p-3'>
      <header className='my-5 lg:my-10 lg:ml-36'>
        <h2 className='font-bold text-3xl lg:text-5xl text-headerBlue'>
          Admin Dashboard
        </h2>
        <p className='font-medium lg:text-2xl text-gray-700'>
          Add new questions, check student result
        </p>
      </header>
      <main>
        <section className='w-full flex justify-end p-2'>
          <button
            className='text-bloodRed font-bold lg:text-3xl'
            onClick={() => navigate('/add-question')}
          >
            + Add New Question
          </button>
        </section>
        <SummaryBox />
      </main>
    </div>
  )
}

export default Dashboard
