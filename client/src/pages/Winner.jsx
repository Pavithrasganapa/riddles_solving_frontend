import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Winner() {

  const navigate = useNavigate()

  const playerName = localStorage.getItem('playerName')

  const [players, setPlayers] = useState([])

  useEffect(() => {

    const fetchLeaderboard = async () => {

      const roomName = localStorage.getItem('roomName')

      const res = await axios.get(
        `https://riddlessolvingbackend-production.up.railway.app/game/leaderboard/${roomName}`
      )

      setPlayers(res.data)
    }

    fetchLeaderboard()

  }, [])

  const singlePlayerScore = localStorage.getItem('singlePlayerScore')

  return (
    <div className='h-screen bg-black text-white flex flex-col items-center justify-center'>

      <BackButton />

      <h1 className='text-7xl mb-10'>🏆 WINNER SCREEN 🏆</h1>

      {
        players.length > 0 ? (

          <div className='bg-gray-900 p-10 rounded-xl w-[500px]'>

            <h2 className='text-4xl mb-5 text-center'>
              Multiplayer Results
            </h2>

            {
              players.map((player, index) => (
                <div
                  key={player.name}
                  className='flex justify-between text-3xl mb-5'
                >
                  <span>
                    {index + 1}. {player.name}
                  </span>

                  <span>{player.score}</span>
                </div>
              ))
            }

          </div>

        ) : (

          <div className='bg-gray-900 p-10 rounded-xl w-[500px] text-center'>

            <h2 className='text-5xl mb-5'>
              🎉 Congratulations 🎉
            </h2>

            <h3 className='text-4xl mb-5'>
              {playerName}
            </h3>

            <p className='text-3xl'>
              Final Score : {singlePlayerScore}
            </p>

          </div>

        )
      }

      <div className='flex gap-10 mt-10'>

        <button
          className='bg-blue-500 px-10 py-4 rounded-xl text-2xl'
          onClick={() => navigate('/')}
        >
          Home
        </button>

        <button
          className='bg-green-500 px-10 py-4 rounded-xl text-2xl'
          onClick={() => navigate('/levels')}
        >
          Play Again
        </button>

      </div>

    </div>
  )
}

export default Winner