import React from "react";


const Apppicture = (props) =>{
    return(
        <div className="Apppicture" style={{backgroundColor: '#BDE1C0', width: '33.3vw'}}>
            <h5 className='app_name'>{props.name}</h5>
            <h6 className='app_desc'>{props.description}</h6>
              <img className='app_pics' src={props.src} alt=""/>
            <h6 className='app_elab'>{props.elaboration}</h6>
        </div>
    );
}
export default Apppicture;
