import React, { useState } from 'react'

const NameInput = ({ name, setName, setLoad }) => {
  const [showError, setShowError] = useState(false)
  const handleClick = () => {
    name ? setLoad(true) : setShowError(true)
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-5'>
        <p className='self-center font-extrabold text-3xl'>Enter your name</p>
        <section>
          <input
            placeholder='John Doe'
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {showError && (
            <p className='text-bloodRed font-semibold italic text-lg mt-1 px-1'>
              You need to enter a name
            </p>
          )}
        </section>

        <button
          className='input text-white bg-headerBlue'
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  )
}
export default NameInput
