import React from "react";
import HardMultipleActions from './HardMultipleActions.js';


const Overviewpicturetwo = (props) =>{
    return(
        <div className='Overview_picturetwo'>
        <div>
            <img className='overview_imagetwo' src={props.src}/>
            <h5 className='overview_desctwo'>{props.description}</h5>
            </div>
            <h5 className='overiew_elabtwo'>{props.elaboration}</h5>
            <a className="overiew_elabtwo" style={{color: 'blue'}} onClick={HardMultipleActions}> Learn More...</a>
        </div>
    );
}
export default Overviewpicturetwo;
