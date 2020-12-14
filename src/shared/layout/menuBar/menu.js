import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import './style.css';

const MenuBar = () => {
    const history = useHistory();
    const location = useLocation();
    const atAboutPage = location.pathname.includes("/about");
    
    const handleBackClick = () => {
        history.goBack();
    }

    return (
        <div className="menuStyle">
            {atAboutPage && <button onClick={handleBackClick}>Back</button>}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default MenuBar;