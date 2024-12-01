import './Header.css';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import NavButtons from '../NavButtons/NavButtons';

function Header({ onButtonClick, showSearchbar, isHomesActive }) {
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <Logo />
                <NavButtons buttons={["Homes", "Register Home"]} onClick={onButtonClick} />
                <div className="header-nav">
                    {showSearchbar && <Searchbar />}
                    {/* <div className="icon-container">
                        <img src="./src/assets/gear.png" alt="" className="icon" />
                    </div> */}
                    <div className="icon-container">
                        <img src="./src/assets/bell.png" alt="" className="icon" />
                    </div>
                    <div className="user-profile">
                        <img src="./src/assets/pussycat.png" alt="" className="user-pic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
