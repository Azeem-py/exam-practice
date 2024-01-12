import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='text-5xl'>
      <p>home</p>
      <button
        className='input bg-headerBlue text-white'
        onClick={() => navigate('/dashboard')}
      >
        login
      </button>
    </div>
  )
}

export default Home
