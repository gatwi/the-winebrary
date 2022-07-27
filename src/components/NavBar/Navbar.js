import React from "react";
import { Link } from "react-router-dom";

 function Navbar(){
    return(
        <nav className="navbar  bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                     <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/">CATALOGUE</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
