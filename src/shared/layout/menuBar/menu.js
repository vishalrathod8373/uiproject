import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import './style.css';

const MenuBar = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const atAboutPage = location.pathname.includes("/about");

    // const handleBackClick = () => {
    //     history.goBack();
    // }

    return (
        /* {atAboutPage && <button onClick={handleBackClick}>Back</button>} */
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">
                            Home<span class="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MenuBar;