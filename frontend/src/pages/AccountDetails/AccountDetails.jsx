import MainHeader from '../../components/MainHeader/MainHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import './AccountDetails.css'

function AccountDetails() {
    return(
        <div className="accPage-wrapper">
            <div className="accPage-container">
                <div className="sidebar-acc">
                    <Sidebar/>
                </div>

                <div className="content-acc">
                    <MainHeader buttons={['Settings']}/>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails