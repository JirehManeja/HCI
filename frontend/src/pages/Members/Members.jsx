import MainHeader from "../../components/MainHeader/MainHeader"
import Sidebar from "../../components/Sidebar/Sidebar"
import './Members.css'


function Members() {
    return(
        <div className="membersPage-wrapper">
            <div className="membersPage-container">
                <div className="sidebar-members">
                    <Sidebar/>
                </div>

                <div className="content-members">
                    <MainHeader buttons={['Members']}/>
                </div>
            </div>
        </div>
    )
}

export default Members