import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import HomeCreation from './pages/HomeCreation/HomeCreation'
import Homes from './components/HomeCreation/Homes/Homes'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/home-creation" element={<HomeCreation/>} />
          <Route path="/test" element={<Homes/>} />
        </Routes>
      </Router>
    )
  }

export default App