import { useState } from 'react'

const Modal = ({ isOpen, onClose, children, handleSubmit }) => {
  const [modalOpen, setModalOpen] = useState(isOpen)

  const closeModal = () => {
    setModalOpen(false)
    onClose()
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 ease-in-out`}
    >
      <div
        className='fixed top-0 left-0 w-full h-full bg-black opacity-50'
        onClick={closeModal}
      ></div>
      <div className='z-10 bg-white p-6 rounded-lg shadow-lg max-w-md'>
        <div className='mb-4'>{children}</div>
        <div className='flex gap-2 text-white'>
          <button
            className='input bg-headerBlue focus:outline-none focus:shadow-outline-blue'
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className='input bg-bloodRed focus:outline-none'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
