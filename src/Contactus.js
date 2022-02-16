import React from 'react'
import { Form ,Button} from 'react-bootstrap'


function Contactus() {
  return (
    <div className='conatiner'>
      <div className='row justify-content-center mx-2'>
      <Form autoComplete="off">
    <Form.Group className="mb-1" controlId="formBasicEmail">
      <Form.Label>Email email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" className='rr-block' />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-1" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" autocomplete="new-password" />
    </Form.Group>
 
    <Form.Group className="mb-1" controlId="formBasicAddress">
      <Form.Label>Enter address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" />
  
    </Form.Group>
    <Form.Group className="mb-1" controlId="formBasicNumber">
      <Form.Label>Enter Phone number</Form.Label>
      <Form.Control type="number" placeholder="Enter phone number" />
  
    </Form.Group>
    <Form.Group className="mb-1" controlId="formBasicText2">
      <Form.Label>Enter address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" />
  
    </Form.Group>
    <Form.Group className="mb-1" controlId="formBasicText1">
      <Form.Label>Bank A/c no</Form.Label>
      <Form.Control type="text" placeholder="Enter A/c no" className='rr-ignore' />
  
    </Form.Group>
    <Form.Group className="mb-1" controlId="formBasicText">
      <Form.Label>Enter Card Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Card Number" className='rr-ignore'/>
  
    </Form.Group>

    <Button variant="primary" type="submit" className='mb-3 mt-2'>
      Submit
    </Button>
  </Form>
  </div></div>
  )
}

export default Contactus