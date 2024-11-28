import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import LoginForm from './components/LoginRegister/LoginForm/LoginForm'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/test" element={<LoginForm />} />
        </Routes>
      </Router>
    )
  }

export default App