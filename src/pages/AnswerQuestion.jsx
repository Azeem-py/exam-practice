import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../data/url'
import NameInput from '../components/NameInput'
import Modal from '../components/Modal'
import FullscreenLoader from '../components/FullScreenLoader'
import CountdownTimer from '../components/CountDownTimer'

const AnswerQuestion = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const { questionID } = useParams()
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    axios
      .get(`${baseURL}/answer-question/${questionID}`)
      .then((resp) => {
        console.log(resp.data)
        setData(resp.data['question'])
      })
      .catch((e) => console.log(e))
  }, [])

  const handleCorrectOption = (qIndex, pIndex) => {
    // qIndex and pIndex means index no. of the question and the option respectively
    const newData = { ...data }
    console.log(newData)
    let currentQuestion = newData['Question'].splice(qIndex, 1)
    const Option = currentQuestion[0]['Option'].map((option, index) => {
      return { ...option, answer: index === pIndex }
    })
    currentQuestion = { ...currentQuestion[0], Option }
    console.log(currentQuestion)
    newData['Question'].splice(qIndex, 0, currentQuestion)
    setData({ ...newData })
  }

  const handleSubmit = () => {
    closeModal()
    setIsLoading(true)
    setIsSubmitted(true)
    const newData = { ...data }
    const pickedOptions = []

    for (let question of newData['Question']) {
      for (let option of question['Option']) {
        console.log(option)
        if (option['answer']) pickedOptions.push(option['id'])
      }
    }

    console.log(pickedOptions)

    axios
      .post(`${baseURL}/question-submit`, {
        name,
        answers: pickedOptions,
        title: questionID,
      })
      .then((resp) => {
        const data = JSON.stringify(resp.data)
        localStorage.setItem('score_data', data)
        localStorage.setItem('pickedOptions', JSON.stringify(pickedOptions))
        navigate(`/score/${questionID}`)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  const Questions = () => {
    return (
      <div className='px-3 py-5'>
        {data ? (
          <div className='h-[calc(100vh-5rem)]'>
            <header className='mb-5'>
              <h2 className='text-5xl font-bold'>{data['title']}</h2>
              <p className='italic font-semibold text-gray-600 '>
                Attempt all questions!
              </p>
            </header>
            <main>
              {data['Question'].map((question, question_index) => {
                const { content, Option } = question
                return (
                  <section key={question_index} className='cursor-pointer'>
                    <p className='text-3xl my-5 font-semibold'>
                      {`${question_index + 1}. ${content}`}
                    </p>

                    <div>
                      {Option.map((option, option_index) => {
                        const { id, content, answer } = option
                        return (
                          <p
                            key={id}
                            className={`lg:ml-10 border-2 lg:w-[30rem] px-2 py-3 text-xl font-semibold mb-2 flex justify-between items-center ${
                              answer && 'bg-green-700 text-white'
                            }`}
                            tabIndex='0'
                            onClick={() =>
                              handleCorrectOption(question_index, option_index)
                            }
                          >
                            {content}
                          </p>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
              <button
                type='button'
                className='input bg-headerBlue text-white mb-3'
                // onClick={handleSubmit}
                onClick={openModal}
              >
                Submit
              </button>
              <div className='flex items-center justify-center'>
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  handleSubmit={handleSubmit}
                >
                  <h1 className='text-2xl font-extrabold mb-4'>
                    You are about to Submit
                  </h1>
                  <p className='font-semibold text-xl'>Are you sure?</p>
                </Modal>
              </div>
              <FullscreenLoader
                isLoading={isLoading}
                loadText={'Wait we are cooking your result...'}
              />
            </main>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }

  return (
    <div>
      {!load ? (
        <NameInput name={name} setName={setName} setLoad={setLoad} />
      ) : (
        <div>
          {data && data['time'] && (
            <div className='fixed right-5 top-2'>
              <CountdownTimer
                minutes={data['time']}
                handleSubmit={handleSubmit}
                isSubmitted={isSubmitted}
              />
            </div>
          )}
          <Questions />
        </div>
      )}
    </div>
  )
}

export default AnswerQuestion
