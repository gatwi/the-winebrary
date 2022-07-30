import React from "react";
import "./../../App.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    <div className="container">
        <Link to="/register" className="btn btn-primary">Sign Up!</Link>
        <div className="row justify-content-center pt-5">
            <div className="col-md-5">
                <div className="card-shadow-lg p-3 mb-5 bg-white rounded">
                    <h3 className="text-center">Register with Us!</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <lable htmlFor="email" className="form-label pt-2">
                                Email Address
                            </lable>
                            <input
                                autocomplete="off"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChangeHandler}
                                className="form-control"
                                id="email"
                                placeholder="myname@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label pt-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="...."
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label"
                            >
                                Bio
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="About me..."
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="female"
                                    value="female"
                                    name="gender"
                                />
                                <label className="form-check-label pointer" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="male"
                                    value="male"
                                    name="gender"
                                />
                                <label className="form-check-label pointer" htmlFor="male">
                                    Male
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="non-binary"
                                    value="non-binary"
                                    name="gender"
                                />
                                <label className="form-check-label pointer" htmlFor="non-binary">
                                    Non-binary
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="region">Region</label>
                            <select className="form-control" id="region">
                                <option value="">Select Your Region</option>
                                <option value="nairobi">Nairobi</option>
                                <option value="central">Central</option>
                                <option value="eastern">Eastern</option>
                                <option value="western">Western</option>
                                <option value="rift-valley">The Rift</option>
                                <option value="coast">Coast</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SignUp;