import React from "react";
import {Button} from 'react-bootstrap';

const contactUsSuccess = () => {

    return (
        <div>
            <h1 style={{margin: '0px 0px 50px 0px',}} className='font-weight-bold'> Contact Us!</h1>
            <h4> We would like to hear from you! Fill up this form below or email us at <a href='mailto:sgwasteless@gmail.com'>sgwasteless@gmail.com</a>.</h4>
            <div className='messageSentText'>
                <h2 className='font-weight-bold'> Message sent! We will get back to you as soon as possible.</h2>
            </div>
            <div className='successButton'  >
                <Button
                    variant='success'
                    size='lg'
                    href="#/"
                >
                Return to Home
                </Button>

            </div>

        </div>
    );

}

export default contactUsSuccess;