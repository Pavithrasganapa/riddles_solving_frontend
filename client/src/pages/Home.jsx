import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Home() {

  const navigate = useNavigate()

  const [playerName, setPlayerName] = useState('')

  const startSinglePlayer = () => {

    if (!playerName) {
      alert('Enter Your Name')
      return
    }

    localStorage.setItem('playerName', playerName)

    navigate('/levels')
  }

  const startMultiplayer = () => {

    if (!playerName) {
      alert('Enter Your Name')
      return
    }

    localStorage.setItem('playerName', playerName)

    navigate('/multiplayer')
  }

  return (
    <div className='h-screen bg-black text-white flex flex-col justify-center items-center'>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className='text-6xl font-bold mb-10'
      >
        Riddle Solving Game
      </motion.h1>

      <input
        type='text'
        placeholder='Enter Your Name'
        className='p-5 rounded text-black text-2xl mb-10 w-[400px]'
        onChange={(e) => setPlayerName(e.target.value)}
      />

      <div className='flex gap-10'>

        <button
          className='bg-blue-500 hover:bg-blue-700 px-10 py-4 rounded-xl text-2xl'
          onClick={startSinglePlayer}
        >
          Single Player
        </button>

        <button
          className='bg-green-500 hover:bg-green-700 px-10 py-4 rounded-xl text-2xl'
          onClick={startMultiplayer}
        >
          Multiplayer
        </button>

      </div>

    </div>
  )
}

export default Home