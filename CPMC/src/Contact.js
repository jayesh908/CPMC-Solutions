import React from 'react'
import './App.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
    return (
        <>
            <div className='shadow-lg mt-5'>
                <br /><br /><center><h3>Contact Us</h3></center><br/>   
                <div className="container text-center border shadow-lg  ">
                    <div className="row align-items-center">
                        <div className="col-sm-4 text-white text-start" id='info' >
                            <div className='row py-5'>
                                <div className='col-sm-12'><h4>Contact Information</h4></div>
                                <div className='col-sm-12'><p><AddLocationIcon/> A-46, Basement, sector-8 Dwarka-75, New Delhi</p></div>
                                <div className='col-sm-12'><p> <PhoneIcon />  +91-8588855843</p></div>
                                <div className='col-sm-12'><p><EmailIcon />  support@cpmc.co.in</p></div>
                            </div>
                        </div>
                        <div className="col-sm-8 text-start"  id='inp'>
                            <form>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div><p>First Name</p>
                                            <input type='text ' class="full" required></input>
                                        </div>
                                    </div>
                                    <div className='col-md-6'><p>Last Name</p>
                                    <input type='text ' class="full" required></input>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div><p>Phone no</p>
                                            <input type='text ' class="full" required></input>
                                        </div>
                                    </div>
                                    <div className='col-md-6'><p>Email</p>
                                    <input type='text ' class="full" required></input>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div><p>Description</p>
                                            <input type='text ' class="full" required></input>
                                        </div>
                                    </div>
                                </div>
                                
                            </form><br/>
                          <button id='btn3'>Submit</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact