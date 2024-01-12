// FullscreenLoader.js

const FullscreenLoader = ({ isLoading, loadText }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        isLoading ? 'visible' : 'invisible'
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
        <div className='ml-4 text-white text-2xl font-bold text-center'>
          {loadText}
        </div>
      </div>
    </div>
  )
}

export default FullscreenLoader
