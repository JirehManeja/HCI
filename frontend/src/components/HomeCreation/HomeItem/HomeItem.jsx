import './HomeItem.css'
import ActionButtons from '../../ActionButtons/ActionButtons'

function HomeItem() {
    return(
        <div className="homeitem-container">
            <span className="home-name-label">Sample Name</span>
            <span className="municipal-city-label">Consolacion</span>
            <span className="barangay-label">Casili</span>
            <span className="role-label">Owner</span>
            <ActionButtons/>
        </div>
    )
}

export default HomeItem