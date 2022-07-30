import React from "react";
import { Link } from "react-router-dom";



 function Home(){
    return(
        <div>
            <div className="App">
             <h1>The Winebrary</h1>
            </div>
            <div className="card-grid">
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/564x/ff/5d/a3/ff5da3da57f1e521adc7387c94448424.jpg" className="d-block w-90 h-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/564x/3a/05/3c/3a053c31b30fc3a2c3e86c593947f70d.jpg" className="d-block w-90 h-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/564x/f4/3b/d5/f43bd56e4ec15d310be9e6c421957283.jpg" className="d-block w-90 h-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/564x/e3/4d/2c/e34d2c91d5d48e076a9fffc120c87290.jpg" className="d-block w-90 h-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/564x/f9/b5/06/f9b50630ff3a81b91fbd962cae737f82.jpg" className="d-block w-90 h-50" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{width: 30 + 'rem'}} >
                    <img src="https://i.pinimg.com/564x/fe/22/15/fe22151d2d229621e1f3eaa74088c132.jpg" className="d-block w-90 h-50" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Book Of The Month</h5>
                        <p class="card-text">All About Love offers radical new ways to think about love by showing its interconnectedness in our private and public lives. In eleven concise chapters, hooks explains how our everyday notions of what it means to give and receive love often fail us, and how these ideals are established in early childhood. Moving from the cultural to the intimate, hooks notes the ties between love and loss and challenges the prevailing notion that romantic love is the most important love of all.</p>
                        <Link to="/cart" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Welcome to The Winebrary</h2>
                <p className="card-text">For the love of Books, Wine, and everything fine, The Winebrary aims to bring the best of these worlds through art! Our mission is to create a fun and enjoyable space for bookish people to socialize and be part of a community of book lovers bu curating cute merchandise and fun events where we can share books and thoughts on diverse topics.</p>
            </div>

        
        </div>
    )
}

export default Home;