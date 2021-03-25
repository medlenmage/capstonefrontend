import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light">
        
        <div className="link-list-container">
            <ul className="navbar-nav link-list m-0">
                <li className="nav-item">
                    <Link className="navbar-brand links listed" to="/home">Arsenal</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link links listed" to="/paystub">Paystub</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link links listed" to="/benefits">Benefits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link links listed" to="/companycontact">Company Contacts</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link links listed" to="/Equipment">Equipment</Link>
                </li>
                    {
                        (localStorage.getItem("employee_user_id") !== null) ?
                            <li className="nav-item">
                                <button className="btn btn-secondary nav-link fakeLink links listed"
                                    onClick={() => {
                                        localStorage.removeItem("employee_user_id")
                                        localStorage.removeItem("user_id")
                                        props.history.push({ pathname: "/" })
                                    }}
                                >Logout</button>
                            </li> :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                    } 
            </ul>
        </div>
    </nav>
);
