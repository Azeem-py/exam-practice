import { useState } from 'react'

const Header = () => {
  return (
    <h1 className='text-3xl font-bold text-center mb-5 text-[#03071e]'>
      Exam Practice (Admin)
    </h1>
  )
}

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' })

  const formData = [
    { name: 'email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', type: 'password', placeholder: 'Enter your password' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  return (
    <div className='w-screen h-full lg:h-screen flex items-center justify-center mt-16 lg:mt-auto'>
      <section>
        <Header />
        <form className='flex flex-col gap-3 lg:w-[30vw] lg:h-[40vh]'>
          {formData.map((data, index) => {
            const { name, type, placeholder } = data
            return (
              <div key={index} className='flex flex-col gap-2 px-1 py-2'>
                <label htmlFor={name} className='text-lg font-semibold'>
                  {name.toUpperCase()}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className='input'
                  value={userData[name]}
                  onChange={handleChange}
                />
              </div>
            )
          })}
          <button className='bg-[#1D3557] text-white  px-4 py-3 rounded text-2xl outline-none'>
            LOGIN
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login
