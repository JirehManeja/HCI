import './Landing.css'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/auth');
    }

    const handleRegisterClick = () => {
        navigate('/auth?mode=signup');
    }

    return(
        <div className="landing-page">
            <div className="lh-wrapper">
                <div className="lh-container">
                    <Logo/>
                    <Button btnName={"Login"} onClick={handleLoginClick}/>
                </div>
            </div>

            {/* Section1 */}
            <div className="section-wrapper">
                <div className="section-container">
                    <div className="text-section">
                        <span className="title">Your Home, Your Rules</span>
                        <span className="subtitle">Effortless Control at Your Fingertips</span>
                        <span className="description">Streamline Your Smart Home Experience with One Powerful App. Manage, Automate, and Monitor - Anytime, Anywhere.</span>
                        <Button btnName={"Register"} onClick={handleRegisterClick} />
                    </div>
                    <div className="img-section">
                        <img src="./src/assets/img1.png" alt="" className="img" />
                    </div>
                </div>
            </div>

            {/* Section2 */}
            <div className="section-wrapper2">
                <div className="section-container2">
                <div className="img-section">
                        <img src="./src/assets/img2.png" alt="" className="img" />
                    </div>
                    <div className="text-section">
                        <span className="title">Customize your comfort with Presets</span>
                        <span className="subtitle">Single Tap Automation</span>
                        <span className="description">Create personalized presets to control multiple devices with a single tap. Set the mood, automate routines, and enjoy effortless living - your home, your way.</span>
                    </div>
                </div>
            </div>

            {/* Section3 */}
            <div className="section-wrapper">
                <div className="section-container">
                    <div className="text-section">
                        <span className="title">Control Multiple Homes with Ease</span>
                        <span className="subtitle">Centralized Home Management</span>
                        <span className="description">Manage all your homes each with its own devices and personalized presets. Stay connected and in control of every space effortlessly.</span>
                    </div>
                    <div className="img-section">
                        <img src="./src/assets/img3.png" alt="" className="img" />
                    </div>
                </div>
            </div>

            {/* Section4 */}
            <div className="section-wrapper">
                <div className="section-container2">
                <div className="img-section">
                        <img src="./src/assets/img4.png" alt="" className="img" />
                    </div>
                    <div className="text-section">
                        <span className="title">Share Control, Stay Connected</span>
                        <span className="subtitle">Manage who can access and control each home.</span>
                        <span className="description">As the main owner, you can give family members, relatives, or trusted individuals access to devices and presets - all on your terms.</span>
                    </div>
                </div>
            </div>

            {/* Extra */}
            <div className="extra-container">
                <img src="./src/assets/logo.png" alt="" className="logo" />
                <span className="tagline">Make your home smart.</span>
                <Button btnName={"Register"} onClick={handleRegisterClick}/>
            </div>

            <Footer/>
        </div>
    )
}

export default Landing