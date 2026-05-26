import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async () => {

    try {

      await axios.post(
        'http://localhost:8080/auth/register',
        {
          name,
          email,
          password
        }
      )

      alert('Registration Successful')

      navigate('/login')
    }
    catch (err) {
      alert('Registration Failed')
    }
  }

  return (
    <div className='h-screen flex justify-center items-center bg-black text-white'>

      <div className='bg-gray-800 p-10 rounded-xl w-[400px]'>

        <h1 className='text-4xl mb-5'>Register</h1>

        <input
          className='p-3 mb-3 text-black w-full'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className='p-3 mb-3 text-black w-full'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          className='p-3 mb-3 text-black w-full'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className='bg-green-500 px-5 py-3 rounded w-full'
          onClick={registerUser}
        >
          Register
        </button>

      </div>

    </div>
  )
}

export default Register