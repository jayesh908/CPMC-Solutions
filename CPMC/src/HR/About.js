import React from 'react'
import Image from '../images/1.png'
import '../App.css'
const About = () => {
    return (
        <>
            <div><h1 className='text-center py-5'>About us</h1></div>
            <div className="container text-start">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <img src={Image} alt='a pic' className='img-fluid'></img>
                    </div>

                    <div className="col-sm-6">
                        <div className='row'>
                            <div className='col-sm-12 lh-base' id='abt'>
                                <p>
                                    C.P.M.C is NEW DELHI based company which was founded in 2020. C.P.M.C.<br />
                                    specialize in New Construction, Consultancy services, Building Strengthening,<br />
                                    Retro fitting, Non-Destructive Testing (NDT), Controlled & Uncontrolled<br />
                                    Dismantling. The company has earned recognition for undertaking large,<br />
                                    complex projects, fostering innovation, embracing emerging technologies, and<br />
                                    making a difference for their clients, employees and community. Our success<br />
                                    comes from a steadfast commitment to the client's vision and a culture of<br />
                                    balance, integrity, leadership and loyalty. At C.P.M.C. we transform <br />
                                    the construction experience through creation of an environment that fosters<br />
                                    collaboration and project team engagement. With a workplace that attracts and<br />
                                    retains the best employees in every field. We are proud of the dedication, skill<br />
                                    , and integrity of each of our employees, and their unique contributions in<br />
                                    building our high-performance teams.
                                </p>
                            </div>
                            <div className='row teaxt-start'>
                                <div className='col-sm-6'>

                                    <h3>Our mission</h3>
                                    <p>To provide quality workmanship<br />
                                        and customer service and maintain the <br />
                                        highest level of professionalism,<br />
                                        honesty and fairness in our<br />
                                        relationships with our customers,<br />
                                        employees and vendors.</p>
                                </div>
                                <div className='col-sm-6'>
                                    <div>
                                        <h3>Our vision</h3>
                                        <p>
                                        To be a company that is in a<br/>
                                         position to take up any challenge in<br/>
                                          the infrastructure industry. To be a <br/>
                                          role model for other upcoming<br/>
                                           companies in the similar sector.”
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default About