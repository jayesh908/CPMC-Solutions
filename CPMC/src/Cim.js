import React from 'react'
import './App.css'
import { Link, Outlet } from "react-router-dom";
import Cat from './cim.png'
import Pet from './cim3.png'

const Cim = ()=> {
    return (
        <div className="container text-center">
            <div className="row align-items-end">
                <div className="col-md-6">
                    <div  className='pox'>
                        <img src={Cat} alt='an floer'></img>
                        <button className='btn1 mt-3'><Link to='/page'>CONSTRUCTION</Link></button>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className='pox'>  
                    <img src={Pet} alt='An flower'>

                    </img>

                    <button className='btn2 mt-3'><Link to='/page'>HR SOLUTION</Link> </button>
                  
                  </div>
                </div>
            </div>
        </div>

    );
}
export default Cim