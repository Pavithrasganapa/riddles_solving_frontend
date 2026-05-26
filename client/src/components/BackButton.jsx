import { useNavigate } from 'react-router-dom'

function BackButton() {

  const navigate = useNavigate()

  return (
    <button
      className='bg-red-500 px-5 py-2 rounded text-white absolute top-5 left-5'
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  )
}

export default BackButton