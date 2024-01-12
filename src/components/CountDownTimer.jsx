import { useState, useEffect } from 'react'

const CountdownTimer = ({ minutes, handleSubmit, isSubmitted }) => {
  const [time, setTime] = useState(minutes * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        } else {
          clearInterval(interval)
          console.log('done boss')
          !isSubmitted && handleSubmit()
          return 0
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [minutes])

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60)
    const secs = timeInSeconds % 60
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`
  }

  return (
    <div className='flex items-center justify-end border rounded-md bg-headerBlue text-white'>
      <div className='text-4xl font-bold text-center   px-2 py-3'>
        {formatTime(time)}
      </div>
    </div>
  )
}

export default CountdownTimer
