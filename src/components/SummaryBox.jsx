import { useNavigate } from 'react-router-dom'

const SummaryBox = ({ id, title, questionNo, stdAttempt }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/question/${id}`)
  }
  return (
    <div
      className='border rounded-lg w-[20rem] h-[10rem] shadow-md p-2 text-headerBlue hover:text-white hover:bg-headerBlue'
      onClick={handleClick}
    >
      <header className='text-2xl font-semibold'>{title}</header>
      <footer className='text-xl mt-10'>
        <p>No. of Questions: {questionNo}</p>
        <p>Student Attempt: 50</p>
      </footer>
    </div>
  )
}

export default SummaryBox
