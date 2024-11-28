import './Overlay.css'
import Button from '../../Button/Button'
import Logo from '../../Logo/Logo'

function Overlay({ onSignUpClick, onLoginClick }) {
    return(
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-right">
                    <Logo/>
                    <span className="overlay-title">Connect and Control!</span>
                    <span className="sub-title">Join us to effortlessly manage your home automation.</span>
                    <Button btnName="Sign Up" onClick={onSignUpClick}/>
                </div>
                <div className="overlay-left">
                    <Logo/>
                    <span className="overlay-title">Ready to Reconnect?</span>
                    <span className="sub-title">Sign in to freely automate your home.</span>
                    <Button btnName="Login" onClick={onLoginClick}/>
                </div>
            </div>
        </div>
    )
}

export default Overlay