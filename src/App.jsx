import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AddQuestion from './pages/AddQuestion'
import QuestionData from './pages/QuestionData'
import AnswerQuestion from './pages/AnswerQuestion'
import Score from './pages/Score'
import StudentsResults from './pages/StudentsResults'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-question' element={<AddQuestion />} />
          <Route path='/question/:questionID' element={<QuestionData />} />
          <Route
            path='/practice-question/:questionID'
            element={<AnswerQuestion />}
          />
          <Route path='/score/:questionID' element={<Score />} />
          <Route
            path='/students-results/:questionID'
            element={<StudentsResults />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
