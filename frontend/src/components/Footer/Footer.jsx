import './Footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <div className="social-icons">
                <div className="icon-holder">
                    <a href="https://github.com" target="_blank" className="a">
                        <img src="./src/assets/github.png" alt="" className="icon" />
                    </a>
                </div>
                <div className="icon-holder">
                    <a href="https://linkedin.com" target="_blank" className="a">
                        <img src="./src/assets/linkedin.png" alt="" className="icon" />
                    </a>
                </div>
                <div className="icon-holder">
                    <a href="https://facebook.com" target="_blank" className="a">
                        <img src="./src/assets/fb.png" alt="" className="icon" />
                    </a>
                </div>
            </div>
            
            <span className="footer-text">&copy; 2024. All Rights Reserved.</span>
        </div>
    )
}

export default Footer