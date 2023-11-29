import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const navBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md bg-dark">
                <div className="container">
                    <a className="navbar-brand ms-3 text-white fs-4" href="#">Start Bootstrap</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="text-white" />
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a class="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default navBar