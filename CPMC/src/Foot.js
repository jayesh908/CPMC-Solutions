import React from 'react'
import './App.css'
import Sol from'./images/S1.jpg'
const Foot = () => {
    return (
        <div class="container-fluid text-start " id='foo'>
            <div class="row align-items-center py-5">
                <div class="col-md-4 ">
                    <div>
                        <img src={Sol} alt='an log' className="img-fluid" id='imd'></img>
                        <p className='py-3'>We blend our diversity of expertise with empirical and<br/>
                         ethnographic research, immersing ourselves in our clie<br/>
                          to understand their needs in their context.</p>
                        </div>
                </div>
                <div class="col-md-4">
                        <div>
                            <h4>CONSTRUCTION</h4><br/>
                                <p>Project Management Consultancy</p>
                                <p>New Construction</p>
                                <p>NDT Work</p>
                                <p>Repair and Rehabition</p>
                                <p>interior works</p>
                                <p>Water Proffing</p>
                                <p>Control and uncontrol Dismantling</p>
                        </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <h4>HR SOLUTION</h4><br/>
                            <p>Executive Search</p>                           
                            <p>Recruitment Solution</p>
                            <p>Contract Staffing & Payroll</p>
                            <p>HR advisory & Consulting</p>
                            <p>Training and development</p>
                    </div>
                </div>
            </div>
            {/* footer */}
        <hr/>
            <div className='row'>
                <div className='col-sm-12'><h6 >Copyright © 2022 C.P.M.C. Solution. All Rights Reserved</h6></div>
            </div>
        </div>
    )
}
export default Foot