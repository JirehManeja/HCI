import './ActionButtons.css'
import Button from '../Button/Button'

function ActionButtons() {
    return(
        <div className="action-buttons-container">
            <Button btnName={'Manage'} backgroundColor={'#5B5DF2'}/>
            <Button btnName={'Delete'} backgroundColor={'#BC474F'}/>
        </div>
    )
}

export default ActionButtons