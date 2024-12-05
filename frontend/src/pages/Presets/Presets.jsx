import Sidebar from "../../components/Sidebar/Sidebar"
import MainHeader from '../../components/MainHeader/MainHeader'
import Searchbar from '../../components/Searchbar/Searchbar'
import './Presets.css'


function Presets() {
    return(
        <div className="presetsPage-wrapper">
            <div className="presetsPage-container">
                <div className="sidebar-presets">
                    <Sidebar/>
                </div>
                <div className="content-presets">
                    <MainHeader buttons={['All Presets', 'Create Preset', 'Preset Details']}/>
                    <div className="searchbar-presets">
                        <Searchbar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presets