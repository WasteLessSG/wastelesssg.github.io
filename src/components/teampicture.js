import React from "react";
import Linkedin from "./../assets/linkedinLogo.png";


const TeamPicture = (props) =>{
    return(
        <div className="teamPicture">
            <img src={props.src} className="rounded-circle" height={245} width={245} alt=""/>
            <h5 className="font-weight-bold mt-4" style={{color:'blue'}}>{props.cof}</h5>
            <h5 className="font-weight-bold">{props.description}</h5>
            <div className="row">
                <h5 className=" mb-3">{props.name} &nbsp; </h5>
                <div style= {{ display :  props.linkpresent ? 'inline' :  'none'}}>
                    <a href={props.link}>
                        <img className= {props.linkpresent ? 'link' : 'nolink'}
                             src={Linkedin}
                             style={{
                                 maxWidth: "25px"  ,
                                 minWidth: "25px",
                                 height: "auto",
                                 marginTop : "-20px"
                             }}/>
                    </a>
                </div></div>

        </div>
    );
}
export default TeamPicture;
