import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Levels from './pages/Levels'
import SinglePlayer from './pages/SinglePlayer'
import Multiplayer from './pages/Multiplayer'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateRoom from './pages/CreateRoom'
import JoinRoom from './pages/JoinRoom'
import Lobby from './pages/Lobby'
import MultiplayerGame from './pages/MultiplayerGame'
import Winner from './pages/Winner'

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/levels' element={<Levels />} />
        <Route path='/single/:id' element={<SinglePlayer />} />

        <Route path='/multiplayer' element={<Multiplayer />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/create-room' element={<CreateRoom />} />
        <Route path='/join-room' element={<JoinRoom />} />

        <Route path='/lobby' element={<Lobby />} />

        <Route path='/multiplayer-game' element={<MultiplayerGame />} />

        <Route path='/winner' element={<Winner />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App