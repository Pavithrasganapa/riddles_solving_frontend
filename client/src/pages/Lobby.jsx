import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'

function Lobby() {

  const navigate = useNavigate()

  const [players, setPlayers] = useState([])

  const roomName = localStorage.getItem('roomName')

  useEffect(() => {

    fetchPlayers()

    const interval = setInterval(() => {
      fetchPlayers()
    }, 2000)

    return () => clearInterval(interval)

  }, [])

  const fetchPlayers = async () => {

    try {

      const res = await axios.get(
        `https://riddlessolvingbackend-production.up.railway.app/rooms/players/${roomName}`
      )

      setPlayers(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>

      <BackButton />

      <h1 className='text-6xl mb-10'>Waiting Lobby</h1>

      <div className='bg-gray-800 p-10 rounded-xl w-[500px]'>

        <h2 className='text-3xl mb-5'>
          Room : {roomName}
        </h2>

        <h3 className='text-2xl mb-5'>Players Joined</h3>

        {
          players.map(player => (
            <div
              key={player.id}
              className='text-2xl mb-3'
            >
              🟢 {player.name}
            </div>
          ))
        }

        <button
          className='bg-green-500 px-10 py-4 rounded-xl mt-10 w-full text-2xl'
          onClick={() => navigate('/multiplayer-game')}
        >
          Start Game
        </button>

      </div>

    </div>
  )
}

export default Lobby