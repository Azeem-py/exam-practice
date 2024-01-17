import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../data/url'
import { useParams } from 'react-router-dom'
import FullscreenLoader from '../components/FullScreenLoader'
import { config } from '../data/config'

const StudentsResults = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { questionID } = useParams()
  useEffect(() => {
    axios
      .get(`${baseURL}/students-results/${questionID}`, config)
      .then((resp) => {
        console.log(resp.data)
        setData(resp.data)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <div className='h-screen w-screen overflow-y-auto p-3'>
      {!isLoading ? (
        <section>
          <h3 className='font-bold text-3xl text-headerBlue mb-4'>{`${data['results'].length} students attempted this question set`}</h3>
          {data['results'].map((student, index) => {
            const { name, score } = student
            return (
              <p
                className='text-xl md:text-2xl font-semibold border-b py-2'
                key={index}
              >{`${index + 1}. ${name} scored ${score} out of ${
                data['questionCount']
              }`}</p>
            )
          })}
        </section>
      ) : (
        <FullscreenLoader
          isLoading={isLoading}
          loadText={"Wait, while we get the students' results"}
        />
      )}
    </div>
  )
}

export default StudentsResults
