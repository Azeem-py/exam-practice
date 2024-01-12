import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../data/url'
import { useParams } from 'react-router-dom'
import FullscreenLoader from '../components/FullScreenLoader'

const StudentsResults = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { questionID } = useParams()
  useEffect(() => {
    axios
      .get(`${baseURL}/students-results/${questionID}`)
      .then((resp) => {
        console.log(resp.data)
        setData(resp.data['results'])
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <div className='h-screen w-screen overflow-y-auto p-3'>
      {!isLoading ? (
        <section>
          <h3 className='font-bold text-3xl text-headerBlue mb-4'>{`${data.length} students attempted this question set`}</h3>
          {data.map((student, index) => {
            const { name, score } = student
            return (
              <p className='text-2xl font-semibold ' key={index}>{`${
                index + 1
              }. ${name} scored ${score}`}</p>
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
