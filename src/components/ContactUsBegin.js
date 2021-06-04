import React, {useState} from "react";
import {Form,Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";


function ContactUsBegin ({submitForm}) {
  const { register, handleSubmit, errors } = useForm();
    const onSubmit2 = data => {
        console.log(data);
        submitForm();
  }; // your form submit function which will invoke after successful validation
  return (

      <div>
          <h1 style={{margin: '0px 0px 50px 0px',}} className='font-weight-bold'> Contact Us!</h1>
          <h4> We would like to hear from you! Fill up this form below or email us at <a href='mailto:sgwasteless@gmail.com'>sgwasteless@gmail.com</a>.</h4>
          <Form className='contact-form' onSubmit={handleSubmit(onSubmit2)}>
              <Form.Group controlId="formBasicEmail" className='formContents' style={{margin: '0px 0px 20px 0px'}}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                    />
                  <Form.Text className="text-muted">
                      We will never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group controlId="formName" className='formContents' >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="message" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formSubject" className='formContents'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="subject" placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className='formContents'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="message" placeholder="Message" />
              </Form.Group>
                  <div  id='contactButton' className='formContents'>
                      <Button variant="secondary" type="submit">
                     <span style={{margin: '0px 20px 0px 20px'}}> Submit </span>
                  </Button>
                  </div>

          </Form>

      </div>
  );
}

export default ContactUsBegin;
