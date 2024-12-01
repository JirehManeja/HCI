import './Homes.css'
import HomeItem from '../HomeItem/HomeItem'

function Homes() {
    return(
        <div className="homes-container">
            <div className="col-labels">
                <span className="col-homename">Home Name</span>
                <span className="col-municipal-city">Municipal / City</span>
                <span className="col-barangay">Barangay</span>
                <span className="col-role">Role</span>
                <span className="col-actions">Actions</span>
            </div>

            <div className="homeitems-container">
                <HomeItem/>
                <HomeItem/>
                <HomeItem/>
                <HomeItem/>
                <HomeItem/>
                <HomeItem/>
                <HomeItem/>
                <HomeItem/>
            </div>
        </div>
    )
}

export default Homes