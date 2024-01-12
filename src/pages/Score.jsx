const Score = () => {
  const { score, questions } = JSON.parse(localStorage.getItem('score_data'))
  const pickedOptions = JSON.parse(localStorage.getItem('pickedOptions'))
  console.log(pickedOptions)
  const { Question, _count } = questions

  return (
    <div className='h-screen w-screen px-5 py-3 overflow-y-auto'>
      <h2 className='text-3xl font-extrabold text-headerBlue'>
        Your result is ready!!!
      </h2>
      <section>
        <div>
          <p className='text-5xl font-semibold'>
            you scored:{' '}
            <span className='text-green-700'>{`${score}/${_count['Question']}`}</span>
          </p>

          <div>
            <header>
              <p>
                The color{' '}
                <span className='text-bloodRed font-bold text-xl'>red </span>{' '}
                represents the wrong answers you chose while{' '}
                <span className='text-green-700 font-bold text-xl'>green </span>
                represents the write ones
              </p>
            </header>
            {Question.map((question, question_index) => {
              const { content, Option } = question
              return (
                <section key={question_index} className='cursor-pointer'>
                  <p className='text-3xl my-5 font-semibold'>{`${
                    question_index + 1
                  }. ${content}`}</p>

                  <div>
                    {Option.map((option) => {
                      const { id, content, is_correct } = option
                      return (
                        <p
                          key={id}
                          className={`lg:ml-10 border-2 lg:w-[30rem] px-2 py-3 text-xl font-semibold mb-2 flex justify-between items-center ${
                            is_correct
                              ? 'bg-green-700 text-white'
                              : pickedOptions.includes(id)
                              ? 'bg-red-700 text-white'
                              : ''
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Score
