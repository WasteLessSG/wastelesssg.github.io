import React from "react";


const IntroSolpicture = (props) =>{
    return(
        <div className="IntroSolpicture">
            <img src={props.src} className="Sol_pic" alt=""/>
            <h5 className="goal_class">{props.description}</h5>
            <h6 className="goal_elab">{props.elaboration}</h6>
        </div>
    );
}
export default IntroSolpicture;
