import React from "react";


const Hardwarepicturetwo = (props) =>{
    return(
        <div className="Hardwarepicturetwo" style={{backgroundColor: "#A5CBC5"}}>
            <h5 className='app_name'>{props.name}</h5>
            <h6 className="app_desc">{props.description}</h6>
            <img src={props.src} className="hardpic" height={450}alt=""/>
            <br/>
            <h6 className='app_elab'>{props.elaboration}</h6>
        </div>
    );
}
export default Hardwarepicturetwo;
