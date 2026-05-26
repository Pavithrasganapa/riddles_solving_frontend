import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import riddles from '../data/riddles'
import BackButton from '../components/BackButton'

function SinglePlayer() {

  const { id } = useParams()

  const level = Number(id) - 1

  const navigate = useNavigate()

  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(
    Number(localStorage.getItem('singlePlayerScore')) || 0
  )

  const checkAnswer = () => {

    if (
      answer.toLowerCase() ===
      riddles[level].answer.toLowerCase()
    ) {

      const updatedScore = score + 10

      setMessage('Correct Answer ✅')

      setScore(updatedScore)

      localStorage.setItem(
        'singlePlayerScore',
        updatedScore
      )

      setTimeout(() => {

        if (level + 2 <= 20) {
          navigate(`/single/${level + 2}`)
        }
        else {
          navigate('/winner')
        }

      }, 1500)
    }
    else {
      setMessage('Wrong Answer ❌')
    }
  }

  return (
    <div className='h-screen bg-black text-white flex flex-col items-center justify-center'>

      <BackButton />

      <h1 className='text-5xl mb-5'>Level {id}</h1>

      <h2 className='text-3xl mb-10'>
        {riddles[level].question}
      </h2>

      <input
        type='text'
        placeholder='Enter Answer'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className='p-5 rounded text-black text-xl w-[400px]'
      />

      <button
        onClick={checkAnswer}
        className='bg-blue-500 px-10 py-4 rounded-xl mt-5 text-xl'
      >
        Submit
      </button>

      <p className='mt-5 text-3xl'>{message}</p>

      <h3 className='mt-5 text-2xl'>Score : {score}</h3>

    </div>
  )
}

export default SinglePlayer