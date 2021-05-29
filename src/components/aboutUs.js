import React from "react";
import {who, ourvision, ourmission} from './AboutUsDescriptions.js';
import AboutUspicture from './AboutUspicture';
import {cdc, mse, sus, rice, moe} from './AboutUsInfo';
import AboutUsLayout from './AboutUsLayout.js'
import AboutUspic from './../assets/About-Us-Intro.JPG'
const aboutUs = () => {

    return (
      <div>
        <img className= "home-pic" src= {AboutUspic} alt = "OG Team Pic"/>
        <h1 className='home-title'>About Us</h1>
          <AboutUspicture src={who.src} header={who.headertext} elaboration={who.elaboration}/>
          <AboutUspicture src={ourvision.src} header={ourvision.headertext} elaboration={ourvision.elaboration}/>
          <AboutUspicture src={ourmission.src} header={ourmission.headertext} elaboration={ourmission.elaboration}/>
        <h1 style={{margin: 50}}> Funding </h1>
         <AboutUsLayout src={cdc.src} header={cdc.header} link={cdc.link} elaboration={cdc.elaboration} background={cdc.background} linktwo={cdc.linktwo} linktwopres={cdc.linktwopres} linktext={cdc.linktext}/>
         <AboutUsLayout src={mse.src} header={mse.header} link={mse.link} elaboration={mse.elaboration} background={mse.background} linktwo={mse.linktwo} linktwopres={mse.linktwopres} linktext={mse.linktext}/>
        <h1 style={{margin: 50}}> Awards </h1>
        <AboutUsLayout src={sus.src} header={sus.header} link={sus.link} elaboration={sus.elaboration} background={sus.background} linktwo={sus.linktwo} linktwopres={sus.linktwopres} linktext={sus.linktext}/>
        <h1 style={{margin: 50}}> Media Features </h1>
        <AboutUsLayout src={rice.src} header={rice.header} link={rice.link} elaboration={rice.elaboration} background={rice.background} linktwo={rice.linktwo} linktwopres={rice.linktwopres} linktext={rice.linktext}/>
        <AboutUsLayout src={moe.src} header={moe.header} link={moe.link} elaboration={moe.elaboration} background={moe.background} linktwo={moe.linktwo} linktwopres={moe.linktwopres} linktext={moe.linktext}/>
      </div>


    );

}

export default aboutUs;
