// this component is for adding question

import React, { useState } from 'react'
import { makeError, reverseError } from '../helpers/makeError'

const Add = ({
  title,
  titleError,
  setTitleError,
  questionSet,
  setQuestionSet,
}) => {
  const [optionInput, setOptionInput] = useState('')
  const [options, setOptions] = useState([])
  const [questionInput, setQuestionInput] = useState('')
  const [error, setError] = useState([
    { name: 'question', msg: '', show: false },
    { name: 'option', msg: '', show: false },
  ])

  const handleClick = (e) => {
    if (optionInput) {
      setOptions([...options, { name: optionInput, is_correct: false }])
      setOptionInput('')
      const newError = error[1]
      newError['msg'] = ''
      newError['show'] = false
      setError(reverseError(error, 1))
    }
  }

  const handleTrueOption = (trueIndex) => {
    options.forEach((option, index) => {
      if (index === trueIndex) {
        option['is_correct'] = true
      } else {
        option['is_correct'] = false
      }
    })
    setOptions([...options])
  }

  const handleRemoveOption = (deleteIndex) => {
    options.splice(deleteIndex, 1)
    setOptions([...options])
  }

  const handleSaveQuestion = () => {
    if (!title) {
      setTitleError(makeError(titleError, 0, 'Set a title'))
      return
    } else setTitleError(reverseError(titleError, 0))
    if (!questionInput) {
      setError(makeError(error, 0, 'You have to type in a question'))
    } else setTitleError(reverseError(error, 0))
    if (!(options.length >= 2)) {
      setError(makeError(error, 1, 'You need to add options'))
      return
    }
    const correct_option = options.filter(
      (options) => options['is_correct'] === true
    )
    if (correct_option.length < 1) {
      setError(makeError(error, 1, 'You need to select the correct option.'))
      return
    } else setError(reverseError(error, 1))

    const question = { content: questionInput, options }
    console.log(question)
    setQuestionSet([...questionSet, question])
    setOptions([])
    setQuestionInput('')
  }

  return (
    <div>
      <section>
        <h3 className='font-bold text-3xl'>Set Your Questions</h3>
        <div>
          <span className='flexCol gap-3 mt-5'>
            <label className='font-semibold text-2xl'>Type your question</label>
            <textarea
              placeholder='Type your question...'
              className='border outline-none text-xl rounded px-5 py-3'
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
            ></textarea>
            <p
              className={`text-xl font-semibold text-bloodRed ${
                error[0]['show'] === false && 'hidden'
              }`}
            >
              {error[0]['msg']}
            </p>
          </span>

          <section className='mt-5'>
            <div className='my-5'>
              <h3 className='text-2xl font-semibold'>Add options:</h3>
              <p className='text-bloodRed font-semibold italic'>
                You can add only 4 options
              </p>
            </div>
            <div>
              <span className='flex flex-wrap gap-2'>
                <span>
                  <input
                    type='text'
                    placeholder='type in option'
                    className='input'
                    value={optionInput}
                    onChange={(e) => setOptionInput(e.target.value)}
                  />
                  <p
                    className={`text-xl font-semibold text-bloodRed ${
                      error[1]['show'] === false && 'hidden'
                    }`}
                  >
                    {error[1]['msg']}
                  </p>
                </span>

                <button
                  className='input bg-blue-900 text-white self-start'
                  onClick={handleClick}
                >
                  Add
                </button>
              </span>

              <section className='flex flex-col mt-5'>
                {options.map((option, index) => {
                  const { name, is_correct } = option
                  return (
                    <div
                      key={index}
                      className={`border-2 lg:w-[30rem] px-2 py-3 text-xl font-semibold mb-2 flex justify-between items-center ${
                        is_correct && 'bg-green-700 text-white'
                      }`}
                      onClick={() => handleTrueOption(index)}
                    >
                      <p>{name}</p>
                      <button
                        className='font-extrabold text-2xl text-bloodRed mr-5 cursor-default w-[3rem]'
                        onClick={(event) => {
                          event.stopPropagation()
                          handleRemoveOption(index)
                        }}
                      >
                        x
                      </button>
                    </div>
                  )
                })}
                <button
                  className='input bg-slate-700 text-white font-semibold self-start mt-2'
                  onClick={handleSaveQuestion}
                >
                  Save Question
                </button>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Add
