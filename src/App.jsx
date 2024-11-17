import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoutes from './routes/ProtectedRoutes'
import AddCharacter from './pages/AddCharacter'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/home' element={<ProtectedRoutes>
          <Home />
        </ProtectedRoutes>} />
        <Route path='/add' element={<ProtectedRoutes>
          <AddCharacter />
        </ProtectedRoutes>} />
      </Routes>
    </div>
  )
}

export default App
