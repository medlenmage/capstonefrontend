import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand links" to="/home">Arsenal</Link>
        <div className="link-list-container">
        <ul className="navbar-nav link-list">
            <li className="nav-item">
                <Link className="nav-link links listed" to="/paystub">Paystub</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link links listed" to="/Technologies">Benefits</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link links listed" to="/Projects">Company Contacts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link links listed" to="/Equipment">Equipment</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link links listed" to="/Projects">Personal Information</Link>
            </li>
                {
                    (localStorage.getItem("employee_user_id") !== null) ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("employee_user_id")
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
