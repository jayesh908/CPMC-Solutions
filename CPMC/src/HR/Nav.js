import React from 'react'
// import logo from './S1.jpg'
import { Link, Outlet } from "react-router-dom";
import '../App.css'
import logo from '../images/S1.jpg'
            const Nav  = ()=>{
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-5">
                <div className="container-fluid">
                    <a className="navbar-brand" id='logo' href="#"><img src={logo} alt='an log' className='img-fluid'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto fw-bold fs-6" id='nab'>
                            <li className="nav-item" id='net'>
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Contact US</a>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        )
}
export default Nav