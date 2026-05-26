import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'

function Levels() {

  const navigate = useNavigate()

  const levels = Array.from({ length: 20 }, (_, i) => i + 1)

  return (
    <div className='min-h-screen bg-gray-900 text-white p-10'>

      <BackButton />

      <h1 className='text-5xl mb-10 text-center'>Select Level</h1>

      <div className='grid grid-cols-4 gap-5'>

        {
          levels.map(level => (
            <button
              key={level}
              className='bg-blue-500 p-10 rounded-xl text-2xl hover:bg-blue-700'
              onClick={() => navigate(`/single/${level}`)}
            >
              Level {level}
            </button>
          ))
        }

      </div>

    </div>
  )
}

export default Levels