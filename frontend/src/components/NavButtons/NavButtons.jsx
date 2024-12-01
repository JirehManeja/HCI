import React, { useState } from "react";
import "./NavButtons.css";

const NavButtons = ({ buttons = [], onClick = () => {} }) => {
    const [activeButton, setActiveButton] = useState(buttons[0] || null);

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
        if (typeof onClick === "function") {
            onClick(buttonName);
        }
    };

    if (!Array.isArray(buttons) || buttons.length === 0) {
        return null;
    }

    return (
        <div className="nav-button-group">
            {buttons.map((buttonName, index) => (
                <button
                    key={index}
                    className={`nav-button ${activeButton === buttonName ? "active" : ""}`}
                    onClick={() => handleClick(buttonName)}
                >
                    {buttonName}
                    {activeButton === buttonName && <div className="underline" />}
                </button>
            ))}
        </div>
    );
};

export default NavButtons;