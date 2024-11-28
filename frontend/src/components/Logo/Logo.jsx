import './Logo.css'

function Logo() {
    return(
        <div className="logo-container">
            <div className="logo">
                <img src="./src/assets/logo.png" alt="homesync-logo"/>
            </div>
            <span className="logo-text">HomeSync</span>
        </div>
    )
}

export default Logo