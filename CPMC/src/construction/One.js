import React from 'react'
import image from '../images/tor-removebg-preview.png'
const One = () => {
    return (
        <div className="container text-center">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div>
                        <h1>
                            ONE STOP<br/>
                            SOLUTION FOR ALL<br/>
                            YOUR HR NEEDS
                        </h1>

                        <p>C.P.M.C HR Solution was established in the year 2020 with a vision to provide world-class<br></br> workforce solutions to organizations and individuals alike.</p>

                        <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    </div>

                </div>
                <div className="col-sm-4">
                   <img src={image} alt='an loop' className='img-fluid'></img>
                </div>
              
            </div>
        </div>
    )
}
export default One