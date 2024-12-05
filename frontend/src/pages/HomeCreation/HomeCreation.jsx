import { useState } from 'react';
import './HomeCreation.css';
import Header from '../../components/HomeCreation/Header/Header';
import HomeRegistrationForm from '../../components/HomeCreation/HomeRegistrationForm/HomeRegistrationForm';
import Homes from '../../components/HomeCreation/Homes/Homes'; // Import the Homes component

function HomeCreation() {
    const [currentView, setCurrentView] = useState('Homes'); // Default to Homes

    const handleButtonClick = (buttonName) => {
        setCurrentView(buttonName);
    };

    return (
        <div className="home-creation-container">
            <Header
                onButtonClick={handleButtonClick}
                showSearchbar={currentView === 'Homes'}
                isHomesActive={currentView === 'Homes'}
            />
            {currentView === 'Homes' && <Homes />}
            {currentView === 'Register Home' && <HomeRegistrationForm />}
        </div>
    );
}

export default HomeCreation;
