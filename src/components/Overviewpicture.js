import React from "react";


const Overviewpicture = (props) =>{
    return(
        <div className="Overview_picture ">
          <div>
            <img className="overview_image" src={props.src}/>
            <h5 className="overview_desc ">{props.description}</h5>
            </div>
            <h5 className="overiew_elab ">{props.elaboration}</h5>
        </div>
    );
}
export default Overviewpicture;
