import './MainHeader.css'
import NavButtons from '../NavButtons/NavButtons'
import { Link } from 'react-router-dom';

function MainHeader({ buttons, onButtonClick }) {
    return(
        <div className="main-header-container">
            <span className="homeName">Home Name</span>
            <NavButtons buttons={buttons} onClick={onButtonClick}/>

            <div className="icon-wrapper">
                <div className="icon-container">
                    <img src="./src/assets/bell.png" alt="" className="icon" />
                </div>
            
                <Link to="/account-details" className="user-profile">
                    <img src="./src/assets/pussycat.png" alt="" className="user-pic" />
                </Link>
            </div>
        </div>
    )
}

export default MainHeader