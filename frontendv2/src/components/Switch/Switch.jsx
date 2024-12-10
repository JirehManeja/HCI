import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className="switch-container"
            onClick={toggleSwitch}
            role="switch"
            aria-checked={isActive}
        >
            <div className={`switch-button ${isActive ? 'active' : ''}`} />
        </div>
    );
};

export default Switch;
