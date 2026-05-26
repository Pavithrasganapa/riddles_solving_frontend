import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'

function Multiplayer() {

  const navigate = useNavigate()

  return (
    <div className='h-screen bg-gray-900 flex flex-col items-center justify-center text-white'>

      <BackButton />

      <h1 className='text-6xl mb-10'>Multiplayer</h1>

      <div className='flex gap-10'>

        <button
          className='bg-green-500 px-10 py-5 rounded-xl text-2xl'
          onClick={() => navigate('/create-room')}
        >
          Create Room
        </button>

        <button
          className='bg-blue-500 px-10 py-5 rounded-xl text-2xl'
          onClick={() => navigate('/join-room')}
        >
          Join Room
        </button>

      </div>

    </div>
  )
}

export default Multiplayer