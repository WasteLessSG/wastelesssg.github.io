import React from "react";


const Apppicturethree = (props) =>{
    return(
        <div className="Apppicture" style={{backgroundColor: '#CCE1BD'}}>
            <h5 className='app_name'>{props.name}</h5>
            <h6 className='app_desc'>{props.description}</h6>
            <br/>
              <img className='app_pics' src={props.src} alt=""/>
            <h6 className='app_elab'>{props.elaboration}</h6>
        </div>
    );
}
export default Apppicturethree;
