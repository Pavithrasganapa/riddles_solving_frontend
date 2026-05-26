import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {

    try {

      const res = await axios.post(
        'http://localhost:8080/auth/login',
        {
          email,
          password
        }
      )

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', res.data.name)

      navigate('/multiplayer')

    }
    catch (err) {
      alert('Login Failed')
    }
  }

  return (
    <div className='h-screen flex justify-center items-center bg-black text-white'>

      <div className='bg-gray-800 p-10 rounded-xl w-[400px]'>

        <h1 className='text-4xl mb-5'>Login</h1>

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
          className='bg-blue-500 px-5 py-3 rounded w-full'
          onClick={loginUser}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login