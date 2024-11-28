import './LoginForm.css'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/home-creation');
    };

    return(
        <div className="login-container">
            <form action="#" className="form">
                <span className="login-title">Sign In</span>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <a href="#" className="forgot-password">Forgot Password?</a>
                <Button btnName="Login" onClick={handleLoginClick}/>
            </form>
        </div>
    )
}

export default LoginForm