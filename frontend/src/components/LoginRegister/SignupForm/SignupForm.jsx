import './SignupForm.css'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

function SignupForm() {
    return(
        <div className="signup-container">
            <form action="#" className="form">
                <span className="signup-title">Create Account</span>
                <div className="fullname">
                    <Input type="text" placeholder="Last Name"/>
                    <Input type="text" placeholder="First Name"/>
                </div>
                <Input type="email" placeholder="Email"/>
                <Input type="text" placeholder="Username"/>
                <Input type="tel" placeholder="+63"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <Button btnName="Create Account"/>
            </form>
        </div>
    )
}

export default SignupForm