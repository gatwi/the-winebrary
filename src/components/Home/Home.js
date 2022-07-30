import React from "react";



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
            </div>

            <div className="container">
                <h2>Welcome to The Winebrary</h2>
                <p className="card-text">For the love of Books, Wine, and everything fine, The Winebrary aims to bring the best of these worlds through art! Our mission is to create a fun and enjoyable space for bookish people to socialize and be part of a community of book lovers bu curating cute merchandise and fun events where we can share books and thoughts on diverse topics.</p>
            </div>

        
        </div>
    )
}

export default Home;