import React from "react";


const Hardwarepicture = (props) =>{
    return(
        <div className="Hardwarepicture">
            <img src={props.src} className="rounded-circle" height={245} width={245} alt=""/>
            <h5 className="font-weight-bold mt-4" style={{color:'blue'}}>{props.name}</h5>
            <h5 className="font-weight-bold">{props.description}</h5>
            <h5 className=" mb-3">{props.elaboration}</h5>
        </div>
    );
}
export default Hardwarepicture;
