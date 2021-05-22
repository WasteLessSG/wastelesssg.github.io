import React from "react";


const Overviewpicturetwo = (props) =>{
    return(
        <div className='Overview_picturetwo'>
        <div>
            <img className='overview_imagetwo' src={props.src}/>
            <h5 className='overview_desctwo'>{props.description}</h5>
            </div>
            <h5 className='overiew_elabtwo'>{props.elaboration}</h5>
        </div>
    );
}
export default Overviewpicturetwo;
