import './HomeOverview.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import CardButton from '../../components/CardButton/CardButton'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'

function HomeOverview() {
    return (
        <div className="homeoverview-wrapper">
            <div className="sidebar-section-ho">
                <Sidebar />
            </div>

            <div className="content-section-ho">
                <div className="header-section-ho">
                    <DashboardHeader />
                </div>

                <div className="components-section-ho">
                    <div className="upper-component-section-ho">
                        <div className="upper-container1">
                            <div className="dev-registered-container">
                                <img src="./src/assets/forward-icon.png" alt="" className="forward-img" />
                                <span className="dev-registered-text">Devices Registered</span>
                                <CardButton />
                            </div>

                            <div className="num-reg-devices-container">
                                <div className="devices-number">4</div>
                                <div className="total-registered-devices">Total registered devices</div>
                            </div>
                        </div>
                        <div className="upper-container2">
                            <div className="time-container">
                                <img src="./src/assets/clock-icon.png" alt="" className="clock-img" />
                                <span className="time-text">Time</span>
                            </div>

                            <div className="current-time">22 : 14</div>
                        </div>
                        <div className="upper-container3"></div>
                    </div>

                    <div className="lower-component-section-ho">
                        <div className="lower-container1">
                            <div className="devices-title-ho-container">
                                <img src="./src/assets/devices-blue-icon.png" alt="" className="devices-blue-icon" />
                                <san className="devices-text-title">Devices</san>
                            </div>
                        </div>
                        <div className="lower-container2">
                            <div className="recent-act-ho-container">
                                <img src="./src/assets/history-icon.png" alt="" className="history-icon" />
                                <span className="recent-act-text-title">Recent Activity</span>
                            </div>
                        </div>
                        <div className="lower-container3">
                            <div className="presets-ho-container">
                                <img src="./src/assets/presets-blue-icon.png" alt="" className="presets-blue-icon" />
                                <span className="presets-text-title">Presets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOverview