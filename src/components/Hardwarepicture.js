import React from "react";


const Hardwarepicture = (props) =>{
    return(
        <div className="Hardwarepicture" style={{backgroundColor: "#C6DEDA"}}>
            <h5 className='app_name'>{props.name}</h5>
            <h6 className="app_desc">{props.description}</h6>
            <img src={props.src} className="hardpic" height={450}alt=""/>
            <br/>
            <br/>
            <h6 className='app_elab'>{props.elaboration}</h6>
        </div>
    );
}
export default Hardwarepicture;
