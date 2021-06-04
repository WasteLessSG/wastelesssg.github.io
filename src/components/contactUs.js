import React, {useState} from "react";
import {Form,Button} from 'react-bootstrap';
import ContactUsSuccess from './contactUsSuccess';
import ContactUsBegin from './ContactUsBegin.js';

const ContactUs = () => {
      const [isSubmitted, setIsSubmitted] = useState(false);
      function submitForm() {
        setIsSubmitted(true);
    }
    return (
      !isSubmitted? <ContactUsBegin submitForm={submitForm}/> : <ContactUsSuccess/>
    )

};


export default ContactUs;
