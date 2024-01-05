import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AddQuestion from './pages/AddQuestion'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-question' element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
