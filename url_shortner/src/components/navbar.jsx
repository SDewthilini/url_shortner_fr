import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand text-orange fw-bold" href="#">
                    bitly
                </a>

                {/* Navbar Toggle (for mobile view) */}
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
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="platformDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Home
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="platformDropdown">
                                <li><a className="dropdown-item" href="#">Option 1</a></li>
                                <li><a className="dropdown-item" href="#">Option 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="solutionsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Solutions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                <li><a className="dropdown-item" href="#">Option 1</a></li>
                                <li><a className="dropdown-item" href="#">Option 2</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                to='/about'
                                //href="#"
                                id="resourcesDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                About Us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                <li><a className="dropdown-item" href="#">Option 1</a></li>
                                <li><a className="dropdown-item" href="#">Option 2</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Action Buttons */}
                    <div className="d-flex align-items-center">
                        <a href="#" className="btn btn-link text-white text-decoration-none me-3">
                            Log in
                        </a>
                        <button className="btn btn-outline-light me-2">
                            Get a Quote
                        </button>
                        <button className="btn btn-light text-dark fw-bold">
                            Sign up Free
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
