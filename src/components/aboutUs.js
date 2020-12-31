import React from "react";
import {who,ourvision,ourmission} from './AboutUsDescriptions';
import AboutUspicture from './AboutUspicture';

const aboutUs = () => {

    return (
      <container>
        <h1>About Us</h1>
          <AboutUspicture src={who.src} description={who.headertext} name=" " elaboration={who.elaboration}/>
          <AboutUspicture src={ourvision.src} description={ourvision.headertext} name=" " elaboration={ourvision.elaboration}/>
          <AboutUspicture src={ourmission.src} description={ourmission.headertext} name=" " elaboration={ourmission.elaboration}/>
      </container>


    );

}

export default aboutUs;
