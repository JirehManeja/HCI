import Footer from '../../components/Footer/Footer';
import PageContainer from '../../components/LoginRegister/PageContainer/PageContainer';
import './LoginRegister.css'

function LoginRegister() {
    return (
        <div className="page-wrapper">
            <PageContainer />
            <Footer className="footer" />
        </div>
    );
}

export default LoginRegister;