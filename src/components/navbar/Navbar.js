import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { title } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link">{ title } <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contacts/add">Add</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    )
}
Navbar.prototypes = {
    title: PropTypes.string
}
export default Navbar;
