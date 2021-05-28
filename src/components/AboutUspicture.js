import React from "react";


const AboutUspicture = (props) =>{
    return(
        <div className="AboutUspicture" style={{}}>
            <img src={props.src} height={200} width={200} alt=""/>
            <h5 style={{marginTop: 15}}> {props.header} </h5>
            <h5 className='aboutus-text'> {props.elaboration}</h5>
        </div>
    );
}
export default AboutUspicture;
