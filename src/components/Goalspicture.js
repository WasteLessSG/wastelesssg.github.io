import React from "react";


const Goalspicture = (props) =>{
    return(
        <div className= "lol">
            <img className="Goalspicture" src={props.src} alt=""/>
            <h5 className="goal_class">{props.description}</h5>
            <h6 className="goal_elab">{props.elaboration}</h6>
        </div>
    );
}
export default Goalspicture;
