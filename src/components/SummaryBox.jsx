// import React from 'react'

const SummaryBox = ({ title, questionNo, stdAttempt }) => {
  return (
    <div className='border rounded-lg w-[20rem] h-[10rem] shadow-md p-2 text-headerBlue hover:text-white hover:bg-headerBlue'>
      <header className='text-2xl font-semibold'>Chemistry</header>
      <footer className='text-xl mt-10'>
        <p>No. of Questions: 30</p>
        <p>Student Attempt: 50</p>
      </footer>
    </div>
  )
}

export default SummaryBox
