import Button from '../../components/Button/Button'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import Searchbar from '../../components/Searchbar/Searchbar'
import './Presets.css'

function Presets() {
    return (
        <div className="presets-wrapper">
            <div className="sidebar-section-presets">
                <Sidebar />
            </div>

            <div className="content-section-presets">
                <div className="header-section-presets">
                    <DashboardHeader buttonNames={['All Presets', 'Create Preset']} />
                </div>

                <div className="create-search-section">
                    <Button buttonName={'Create Preset'} bgColor='#013A71' textColor='white' />
                    <Searchbar placehold={'Search'} />
                </div>

                <div className="components-section-presets">

                </div>
            </div>
        </div>
    )
}

export default Presets