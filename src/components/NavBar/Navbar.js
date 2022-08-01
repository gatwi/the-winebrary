import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "./../../search.svg";
import Search from "../Search/Search";

 function Navbar(){
    const [searchTerm, setSearchTerm] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchTerm(lowerCase);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">THE WINEBRARY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link" to="/">HOME</Link>
                <Link className="nav-link" to="/CATALOGUE">CATALOGUE</Link>
                <Link className="nav-link" to="/register">SIGN UP</Link>
                <Link to="/shopping"><i className=" bi bi-cart-check-fill"></i></Link>
                </ul>
                <div className="d-flex">
                    <input class="form-control me-2" 
                    type="Search" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Searching..." 
                    aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
