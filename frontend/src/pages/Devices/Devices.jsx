import MainHeader from "../../components/MainHeader/MainHeader"
import Sidebar from "../../components/Sidebar/Sidebar"

import './Devices.css'


function Devices() {
    return(
        <div className="deivcesPage-wrapper">
            <div className="deivcesPage-container">
                <div className="sidebar-deivces">
                    <Sidebar/>
                </div>

                <div className="content-deivces">
                    <MainHeader buttons={['All Devices', 'Manage Devices']}/>
                </div>
            </div>
        </div>
    )
}

export default Devices