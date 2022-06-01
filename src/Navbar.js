import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav classNameName="navbar navbar-expand-lg bg-light">
                        <div classNameName="container-fluid">
                            <a classNameName="navbar-brand" href="/">{props.title}</a>
                            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span classNameName="navbar-toggler-icon"></span>
                            </button>
                            <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul classNameName="navbar-nav">
                                    <li classNameName="nav-item">
                                        <a classNameName="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li classNameName="nav-item">
                                        <a classNameName="nav-link" href="/">Features</a>
                                    </li>
                                    <li classNameName="nav-item">
                                        <a classNameName="nav-link" href="/">Pricing</a>
                                    </li>
                                    <li classNameName="nav-item dropdown">
                                        <a classNameName="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a classNameName="dropdown-item" href="/">Action</a></li>
                                            <li><a classNameName="dropdown-item" href="/">Another action</a></li>
                                            <li><a classNameName="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <nav classNameName="navbar bg-light">
                                <div classNameName="container-fluid">
                                    <form classNameName="d-flex" role="search">
                                        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button classNameName="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
            </div>

        </div >
    )
}
// now title will be string otherwise 
Navbar.propTypes = {
    title: PropTypes.string

}
