import React from "react";


const TeamPicture = (props) =>{
    return(
        <div className="teamPicture">
            <img src={props.src} className="rounded-circle" height={245} width={245} alt=""/>
            <h5 className="font-weight-bold mt-4" style={{color:'blue'}}>{props.cof}</h5>
            <h5 className="font-weight-bold">{props.description}</h5>
            <h5 className=" mb-3">{props.name}</h5>
        </div>
    );
}
export default TeamPicture;
