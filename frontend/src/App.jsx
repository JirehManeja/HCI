import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import HomeCreation from './pages/HomeCreation/HomeCreation'
import HomeOverview from './pages/HomeOverview/HomeOverview'
import MainHeader from './components/MainHeader/MainHeader'
import Presets from './pages/Presets/Presets'
import Members from './pages/Members/Members'
import Devices from './pages/Devices/Devices'
import AccountDetails from './pages/AccountDetails/AccountDetails'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/home-creation" element={<HomeCreation/>} />
          <Route path="/home-overview" element={<HomeOverview/>} />
          <Route path="/presets" element={<Presets/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/account-details" element={<AccountDetails/>} />
          <Route path="/test" element={<MainHeader/>} />
        </Routes>
      </Router>
    )
  }

export default App