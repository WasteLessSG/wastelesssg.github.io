import React from "react";
import {who, ourvision, ourmission} from './AboutUsDescriptions.js';
import AboutUspicture from './AboutUspicture';
import {cdc, mse, sus, rice, moe} from './AboutUsInfo';
import AboutUsLayout from './AboutUsLayout.js'
const aboutUs = () => {

    return (
      <div>
        <h1>About Us</h1>
          <AboutUspicture src={who.src} header={who.headertext} elaboration={who.elaboration}/>
          <AboutUspicture src={ourvision.src} header={ourvision.headertext} elaboration={ourvision.elaboration}/>
          <AboutUspicture src={ourmission.src} header={ourmission.headertext} elaboration={ourmission.elaboration}/>
        <h1> Funding </h1>
         <AboutUsLayout src={cdc.src} header={cdc.header} link={cdc.link} elaboration={cdc.elaboration} background={cdc.background}/>
         <AboutUsLayout src={mse.src} header={mse.header} link={mse.link} elaboration={mse.elaboration} background={mse.background}/>
        <h1> Awards </h1>
        <AboutUsLayout src={sus.src} header={sus.header} link={sus.link} elaboration={sus.elaboration} background={sus.background}/>
        <h1> Media Features </h1>
        <AboutUsLayout src={rice.src} header={rice.header} link={rice.link} elaboration={rice.elaboration} background={rice.background}/>
        <AboutUsLayout src={moe.src} header={moe.header} link={moe.link} elaboration={moe.elaboration} background={moe.background}/>
      </div>


    );

}

export default aboutUs;
