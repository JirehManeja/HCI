import './HomeOverview.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import MainHeader from '../../components/MainHeader/MainHeader';

function HomeOverview() {
    return(
        <div className="home-overview-wrapper">
            <div className="home-overview-container">
                <div className="sidebar-ho">
                    <Sidebar/>
                </div>
                <div className="content-ho">
                    <MainHeader buttons={['Overview']}/>
                    <div className="comps-wrapper-ho">
                        <div className="left-division">
                            <div className="active-preset-container">
                                <span className="span-titles-ho">Active Preset</span>
                            </div>
                            <div className="presets-container">
                                <span className="span-titles-ho">Presets</span>
                            </div>
                        </div>

                        <div className="middle-division">
                            <div className="devices-summary-container">
                                <span className="span-titles-ho">Devices Summary</span>
                            </div>
                            <div className="reg-devices-container">
                                <span className="span-titles-ho">Registered Devices</span>
                            </div>
                            <div className="members-container">
                                <span className="span-titles-ho">Members</span>
                            </div>
                        </div>

                        <div className="right-division">
                            <div className="time-container">
                                <span className="span-titles-ho">Time</span>
                            </div>
                            <div className="recent-act-container">
                                <span className="span-titles-ho">Recent Activity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOverview