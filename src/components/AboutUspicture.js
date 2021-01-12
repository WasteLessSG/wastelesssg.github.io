import React from "react";



const AboutUspicture = (props) =>{
    return(
        <div className="AboutUspicture">
            <img src={props.src} height={200} width={200} alt=""/>
            <p></p>
            <p></p>
            <h5 className="font-weight-bold">{props.description}</h5>
            <p></p>
            <div class="container-md">
              <h5 className=" mb-3">
            {props.elaboration}</h5>
            </div>
            
        </div>
    );
}
export default AboutUspicture;
