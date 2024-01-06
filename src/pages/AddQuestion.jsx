import { useState } from 'react'
import Add from '../components/Add'
import axios from 'axios'
import { baseURL } from '../data/url'

const AddQuestion = () => {
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState([
    {
      name: title,
      msg: '',
      show: false,
    },
  ])
  const [questionSet, setQuestionSet] = useState([])

  const handlePublish = () => {
    console.log(title)
    console.log(JSON.stringify(questionSet))
    if (!title) {
      return alert('You need to add a title')
    }

    if (questionSet.length == 0) {
      return alert('You need to set questions')
    }

    axios
      .post(`${baseURL}/add-question/`, { title, questions: questionSet })
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e))
  }

  return (
    <div className='w-screen h-screen px-5 py-3 lg:px-36 lg:py-10'>
      <header className='mb-5 lg:mb-10'>
        <h2 className='text-2xl lg:text-5xl font-bold'>Add New Questions</h2>
        <p className='text-bloodRed font-semibold italic text-xl mt-2'>
          {questionSet.length} question(s) added
        </p>
      </header>

      <main>
        <section>
          <div className='flexCol gap-2 lg:w-[40vw]'>
            <label className='font-semibold text-xl'>Enter A Title</label>
            <input
              type='text'
              placeholder='e.g Chemistry Question'
              className='input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p
              className={`text-xl font-semibold text-bloodRed ${
                titleError[0]['show'] === false && 'hidden'
              }`}
            >
              {titleError[0]['msg']}
            </p>
          </div>

          <section className='mt-10 lg:w-[50vw]'>
            <Add
              title={title}
              titleError={titleError}
              setTitleError={setTitleError}
              questionSet={questionSet}
              setQuestionSet={setQuestionSet}
            />
          </section>
          <button
            className='input bg-[#990000] my-3 text-white'
            onClick={handlePublish}
          >
            Publish!
          </button>
        </section>
      </main>
    </div>
  )
}

export default AddQuestion
