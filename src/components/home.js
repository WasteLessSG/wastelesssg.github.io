import React from "react";
import Goalspicture from "./Goalspicture";
import {monitor,promote,policy} from './GoalsDescriptions';

const aboutUs = () => {

    return (
      <container>
        <h1>WasteLess.</h1>
        <text> Wasteless Integrated environmental technology solution comprising a mobile application and rubbish chute modification, harnessing behavioural psychology, data analytics and visualisation to improve household waste management. </text>
        <div className='row teamRows'>
          <Goalspicture src={monitor.src} description={monitor.headertext} name=" " elaboration={monitor.elaboration}/>
          <Goalspicture src={promote.src} description={promote.headertext} name=" " elaboration={promote.elaboration}/>
          <Goalspicture src={policy.src} description={policy.headertext} name=" " elaboration={policy.elaboration}/>
        </div>
      </container>



    );

}

export default aboutUs;
