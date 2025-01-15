import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SignInButton, useAuth, UserButton } from '@clerk/clerk-react'


function Navbar() {

    const {isSignedIn} = useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand text-orange fw-bold" to="/">
                    bitly
                </Link>

                {/* Navbar Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/solutions"
                            >
                                Solutions
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>

                    {/* Action Buttons */}
                    <div className="d-flex align-items-center">
                        <Link to="/login" className="btn btn-link text-white text-decoration-none me-3">
                            Log in
                        </Link>
                        
                        <Link to="/signup" className="btn btn-light text-dark fw-bold">
                            Sign up Free
                        </Link>
                        <UserButton/>
                        <SignInButton/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;