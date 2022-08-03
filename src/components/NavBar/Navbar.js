import React, { useState } from "react";
import { Link } from "react-router-dom";


 function Navbar(){
    

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">THE WINEBRARY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                        <Link className="nav-link" to="/">HOME</Link>
                        <Link className="nav-link" to="/CATALOGUE">CATALOGUE</Link>
                        <Link className="nav-link" to="/register">SIGN UP</Link>
                        <Link className="nav-link" to="/search">SEARCH</Link>
                        <Link to="/shopping" className="nav-link">CART</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
