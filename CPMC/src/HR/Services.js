import React from "react";
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Services = () => {
    return (
        <>
            <h2 className="text-center py-4">SERVICES</h2>
            <div className="container text-center">
                <div className="row align-items-center gy-4">
                    <div className=" col-sm-4">
                        <Card style={{ width: '18rem',backgroundColor : '#C2EEEE', color:'black' }}>
                          
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card style={{ width: '18rem',backgroundColor : '#88D6D6', color:'black'}}>
                           
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className=" col-sm-4">
                        <Card style={{ width: '18rem',backgroundColor : '#C2EEEE', color:'black' }}>
                          
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card style={{ width: '18rem',backgroundColor : '#88D6D6', color:'black' }}>
                            
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="  col-sm-4">
                        <Card style={{ width: '18rem' ,backgroundColor : '#C2EEEE', color:'black'}}>
                          
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card style={{ width: '18rem' ,backgroundColor : '#88D6D6', color:'black' }}>
                            
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className=" col-sm-4">
                        <Card style={{ width: '18rem',backgroundColor : '#C2EEEE', color:'black' }}>
                            
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>


        </>

    );
}

export default Services