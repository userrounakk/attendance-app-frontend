import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='welcome' element={<Welcome />} />
        <Route exact path='login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
