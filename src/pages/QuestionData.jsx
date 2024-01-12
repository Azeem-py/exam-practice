import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../data/url'
import { useClipboard } from '../hooks/useClipboard'
import { config } from '../data/config'

const QuestionData = () => {
  const { questionID } = useParams()
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${baseURL}/question-data/${questionID}`, config)
      .then((resp) => {
        console.log(resp.data)
        setData(resp.data['question'])
      })
      .catch((e) => console.log(e))
  }, [])

  const handleShowResults = () => {
    navigate(`/students-results/${questionID}`)
  }

  const textToCopy = `localhost:5173/practice-question/${questionID}`
  const copyToClipboard = useClipboard()

  const handleClickToCopy = () => {
    copyToClipboard(textToCopy)
    alert('Question link copied!')
  }

  return (
    <div className='px-3 py-5'>
      {data ? (
        <div>
          <header className='mb-5'>
            <h2 className='text-5xl font-bold'>{data['title']}</h2>
            <p
              className='text-2xl underline font-semibold text-bloodRed'
              onClick={handleShowResults}
            >
              Click to see students result
            </p>
            <p
              className='text-2xl underline font-semibold text-bloodRed'
              onClick={handleClickToCopy}
            >
              Click to copy question link
            </p>
          </header>
          <main>
            {data['Question'].map((question, index) => {
              const { content, Option } = question
              return (
                <section key={index}>
                  <p className='text-3xl my-5 font-semibold'>{content}</p>
                  <div>
                    {Option.map((option, index) => {
                      const { id, content, is_correct } = option
                      return (
                        <p
                          name={id}
                          key={index}
                          className={`lg:ml-10 border-2 lg:w-[30rem] px-2 py-3 text-xl font-semibold mb-2 flex justify-between items-center ${
                            is_correct && 'bg-green-700 text-white'
                          }`}
                        >
                          {content}
                        </p>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </main>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default QuestionData
