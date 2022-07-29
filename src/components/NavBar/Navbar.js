import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "./../../search.svg";
import Search from "../Search/Search";

 function Navbar(){
    const [searchTerm, setSearchTerm] = useState("");
    
    return(
        <nav className="navbar bg-light">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                     <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/CATALOGUE">CATALOGUE</Link>
                        <div className="d-flex">
                            <div className="search">
                                <input
                                 value={searchTerm} 
                                 onChange={(e) => setSearchTerm(e.target.value)} 
                                 placeholder=""
                               />
                                <img
                                 src={SearchIcon}
                                 alt={Search}
                                 onClick={() => {}}
                               />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
