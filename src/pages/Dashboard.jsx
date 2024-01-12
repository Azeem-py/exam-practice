import { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryBox from '../components/SummaryBox'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../data/url'

const Dashboard = () => {
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios
      .get(`${baseURL}/list-questions`)
      .then((resp) => {
        console.log(resp.data)
        setQuestions(resp.data['questions'])
      })
      .catch((e) => console.log(e))
  }, [])

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
        <section className='flex gap-3 flex-wrap'>
          {questions.length > 0 &&
            questions.map((question) => {
              const { id, title, _count } = question
              return (
                <SummaryBox
                  key={id}
                  id={id}
                  title={title}
                  questionNo={_count['Question']}
                />
              )
            })}
        </section>
        {/* <SummaryBox /> */}
      </main>
    </div>
  )
}

export default Dashboard
