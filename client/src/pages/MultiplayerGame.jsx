import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import riddles from '../data/riddles'

function MultiplayerGame() {

  const navigate = useNavigate()

  const [questionIndex, setQuestionIndex] = useState(0)

  const [time, setTime] = useState(60)

  const [answer, setAnswer] = useState('')

  const [message, setMessage] = useState('')

  const [scores, setScores] = useState([])

  const [players, setPlayers] = useState([])

  useEffect(() => {

    const username = localStorage.getItem('username')

    const storedPlayers = JSON.parse(localStorage.getItem('players')) || []

    if (!storedPlayers.includes(username)) {

      storedPlayers.push(username)

      localStorage.setItem('players', JSON.stringify(storedPlayers))
    }

    setPlayers(storedPlayers)

    const existingScores = storedPlayers.map(player => ({
      name: player,
      score: 0
    }))

    setScores(existingScores)

  }, [])

  useEffect(() => {

    if (time === 0) {

      nextQuestion()
    }

    const timer = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)

  }, [time])

  const checkAnswer = () => {

    if (
      answer.toLowerCase() ===
      riddles[questionIndex % riddles.length].answer.toLowerCase()
    ) {

      setMessage('Correct Answer ✅')

      const username = localStorage.getItem('username')

      const updatedScores = scores.map(player => {

        if (player.name === username) {

          return {
            ...player,
            score: player.score + 10
          }
        }

        return player
      })

      setScores(updatedScores)

      setTimeout(() => {
        nextQuestion()
      }, 1500)
    }
    else {
      setMessage('Wrong Answer ❌')
    }
  }

  const nextQuestion = () => {

    setTime(60)

    setAnswer('')

    setMessage('')

    if (questionIndex + 1 < 20) {

      setQuestionIndex(questionIndex + 1)
    }
    else {

      localStorage.setItem('finalScores', JSON.stringify(scores))

      const userId = localStorage.getItem('userId')

    await axios.post(
      `https://riddlessolvingbackend-production.up.railway.app/game/update-score/${userId}/${score}`
)
      navigate('/winner')
    }
  }

  return (
    <div className='min-h-screen bg-black text-white p-10'>

      <BackButton />

      <h1 className='text-5xl text-center mb-5'>Multiplayer Game</h1>

      <h2 className='text-3xl text-center mb-5'>
        Question {questionIndex + 1} / 20
      </h2>

      <h2 className='text-3xl text-center mb-10 text-red-500'>
        Time Left : {time} Seconds
      </h2>

      <div className='bg-gray-900 p-10 rounded-xl'>

        <h2 className='text-3xl mb-5'>
          {riddles[questionIndex % riddles.length].question}
        </h2>

        <input
          className='p-4 text-black w-full mb-5'
          placeholder='Enter Answer'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          className='bg-green-500 px-10 py-4 rounded-xl'
          onClick={checkAnswer}
        >
          Submit
        </button>

        <p className='mt-5 text-2xl'>{message}</p>

      </div>

      <div className='mt-10 bg-gray-900 p-10 rounded-xl'>

        <h1 className='text-4xl mb-5'>Real-Time Scoreboard</h1>

        {
          scores.map(player => (
            <div
              key={player.name}
              className='flex justify-between text-2xl mb-3'
            >
              <span>{player.name}</span>
              <span>{player.score}</span>
            </div>
          ))
        }

      </div>

      <div className='mt-10 bg-gray-900 p-10 rounded-xl'>

        <h1 className='text-4xl mb-5'>Players Online</h1>

        {
          players.map(player => (
            <div
              key={player}
              className='text-2xl mb-2'
            >
              🟢 {player}
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default MultiplayerGame