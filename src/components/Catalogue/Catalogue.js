import React from "react";
import { Link } from "react-router-dom";

function Catalogue(){
    return(
        <div>
            <div className="card-grid d-flex flex-wrap">
                <div className="container-fluid">
                 <img src="https://static8.depositphotos.com/1007919/846/i/450/depositphotos_8462473-stock-photo-bookstore-in-buenos-aires.jpg" />
                 <Link to="/books" className="btn btn-primary">Grab a book</Link>
                </div>

                <div className="container-fluid ">
                 <img src="https://cdn.londonandpartners.com/visit/london-organisations/dirty-martini/71783-640x360-dirtymartini640.jpg" />
                 <Link to="/drinks" className="btn btn-primary">I'll drink to that</Link>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;