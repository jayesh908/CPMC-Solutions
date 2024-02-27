import React from 'react'
import './App.css'
import last from './last.jpg'
const Mission = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src={last} alt='a pic' className='mt-5 img-fluid'></img>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className='row shadow-lg text-start'>
                        <div className='col-sm-12 p-4'>
                            <center><h4>Mission:</h4></center>
                            <p>To provide quality workmanship and customer service and maintain the highest level <br />
                                professionalism, honesty and fairness in our relationships with our customers,<br /> employees and vendors. To grow by continually providing useful and significant<br />
                                products, services, and solutions to markets we already serve-and to expand into new<br />
                                are and coustomer interest.</p>
                        </div>

                    </div>
                    <div className='row shadow-lg text-start mt-4'>
                        <div className='col-sm-12 p-3'>
                            <center><h4>Vision:</h4></center>
                            <p>"To be a company that is in a position to take up any challenge in the infrastructure industry.</p></div>
                    </div>
                    <div className='row shadow-lg text-start mt-4'>
                        <div className='col-sm-12 p-3'>
                        <center><h4>Values:</h4></center>
                        <p>Commitment to customers, Passion, Leadership,Innovation Quality, Team Work.</p></div>
                        </div>
                </div>

            </div>
        </div>
    )
}
export default Mission