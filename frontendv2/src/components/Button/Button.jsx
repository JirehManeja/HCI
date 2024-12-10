import './Button.css'

function Button({ buttonName, onClick, bgColor = 'white', textColor = 'black' }) {
    return (
        <button className='buttonComponent' onClick={onClick} style={{ backgroundColor: bgColor, color: textColor }} >
            {buttonName}
        </button>
    );
}

export default Button