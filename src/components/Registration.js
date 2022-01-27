
import React, { useRef, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Container, Form, FormControl, FormLabel,Card } from 'react-bootstrap';
// import { Redirect } from 'react-router';
import Button from '@mui/material/Button';
import valUser from '../actions/index';
import { valState } from '../reducers/validate';
import { useDispatch, useSelector } from 'react-redux';

export default function Registration() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.valState);
    console.log(userData)
    const fNameInput = useRef(null);
    const lNameInput = useRef(null);
    const emailInput = useRef(null);
    const passInput = useRef(null);
    const cPassInput = useRef(null);
    return (
        <div>
            <Container fluid style={{ width: "600px", margin: "70px auto" }}>
                <h1>Hello User!! Join Us By Registering</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter first name" ref={fNameInput} id="fName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Enter Last name" ref={lNameInput} id="lName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Enter Email" ref={emailInput} id="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="password" placeholder="Enter Password" ref={passInput} id="pass" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="password" placeholder="Confirm Password" ref={cPassInput} id="cPass" />
                    </Form.Group>
                    <Button className="mx-1" variant="contained" onClick={() => dispatch(valUser({ FName: fNameInput.current.value, LName: lNameInput.current.value, Email: emailInput.current.value, PassWord: passInput.current.value, CPassword: cPassInput.current.value }))}  >Register</Button>
                    <br />
                    {/* <a style={{ color: 'blue' }} to="/">Login Over Here</a> */}
                    {/* {pflag == 1 && <Redirect to='/' />} */}

                </Form>
            </Container>
            
                <>
               
                   
            
                    <h1>User Details</h1>
             {userData.user.map(udata =>
           
                    <Card style={{ width: '18rem',marginLeft:'550px' }}>
                   
                    <Card.Body>
                        <Card.Title>{udata.name}</Card.Title>
                        <Card.Text>{udata.email}</Card.Text>
                        <Card.Text>{udata.password}</Card.Text>
                      
                    </Card.Body>
                    </Card>
             )}
                        </>
        </div>
    )
}
