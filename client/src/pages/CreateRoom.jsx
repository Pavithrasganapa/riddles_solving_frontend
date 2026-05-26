import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateRoom() {

  const navigate = useNavigate()

  const [roomName, setRoomName] = useState('')
  const [roomPassword, setRoomPassword] = useState('')

  const createRoom = async () => {

    await axios.post(
      'https://riddlessolvingbackend-production.up.railway.app/rooms/create',
      {
        roomName,
        roomPassword
      }
    )

    localStorage.setItem('roomName', roomName)

    navigate('/lobby')
  }

  return (
    <div className='h-screen bg-black flex justify-center items-center text-white'>

      <div className='bg-gray-900 p-10 rounded-xl w-[500px]'>

        <h1 className='text-5xl mb-10'>Create Room</h1>

        <input
          className='p-4 mb-5 text-black w-full'
          placeholder='Room Name'
          onChange={(e) => setRoomName(e.target.value)}
        />

        <input
          className='p-4 mb-5 text-black w-full'
          placeholder='Room Password'
          onChange={(e) => setRoomPassword(e.target.value)}
        />

        <button
          className='bg-green-500 px-5 py-4 rounded w-full text-2xl'
          onClick={createRoom}
        >
          Create
        </button>

      </div>

    </div>
  )
}

export default CreateRoom