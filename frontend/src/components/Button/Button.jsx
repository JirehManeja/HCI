import './Button.css'

function Button({ btnName, onClick, backgroundColor }) {
    return(
        <button 
            className="button" 
            onClick={onClick} 
            style={{ backgroundColor: backgroundColor }}
        >
            {btnName}
        </button>
    )
}

export default Button