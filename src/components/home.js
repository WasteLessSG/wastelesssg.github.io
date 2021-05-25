import React from "react";
import Goalspicture from "./Goalspicture";
import Overviewpicture from "./Overviewpicture";
import Overviewpicturetwo from "./Overviewpicturetwo";
import {monitor,promote,policy} from './GoalsDescriptions';
import {appoverview, hardwareoverview} from './OverviewDescriptions';
import Homepic from './../assets/Homepic.jpeg'

const aboutUs = () => {

    return (
      <container>
        <img className= "home-pic" src= {Homepic} alt = "WasteLess Chute"/>
        <h1 className= "home-title"> WasteLess.</h1>
        <div className= "home-text" > WasteLess is an integrated environmental technology solution comprising a mobile application and rubbish chute modification, harnessing behavioural psychology, data analytics and visualisation to improve household waste management.
        In collaboration with National University of Singapore, Wasteless is currently in pilot phase fully supported by South West Community Development Council. </div>
        <div className='row teamRows'>
          <Goalspicture className="namethis" src={monitor.src} description={monitor.headertext} name=" " elaboration={monitor.elaboration}/>
          <Goalspicture src={promote.src} description={promote.headertext} name=" " elaboration={promote.elaboration}/>
          <Goalspicture src={policy.src} description={policy.headertext} name=" " elaboration={policy.elaboration}/>
        </div>
        <h2>Bridging Behavioural Psychology and Waste Management</h2>
          <div className='desc-text'> Behavioural psychology or behaviourism, is a theory suggesting that the environment shapes human behaviour. In a most basic sense, behavioural psychology is the study and analysis of observable behaviour. Using the concept of behavioural nudging and diffusion of responsibility, WasteLess aims to implement a two-prong solution, to incentivise sustainable waste habits (reduce trash production and increasing recycling), by allowing users to track and visualize their personal waste statistics, and compare their performance with peers of the same community. </div>
            <br/>
          <div className='alignment_two'>
            <Overviewpicture className='here_we' src={appoverview.src} description={appoverview.headertext} elaboration={appoverview.elaboration}/>
          </div>
          <div className='alignment_three'>
          <Overviewpicturetwo src={hardwareoverview.src} description={hardwareoverview.headertext} elaboration={hardwareoverview.elaboration}/>
          </div>
            <br/>
        <h2 className='wastelessexperience'>The WasteLess Experience</h2>
          <div className='desc-text'> After months of design, development and testing, WasteLess will be officially rolled out on January 11th 2021 in a three-month trial at the National University of Singapore’s Tembusu Residential College. The trial will involve some 60 Tembusu residents who will have their existing community rubbish chutes on their levels replaced by WasteLess smart chutes. Supported by the South West Community Development Council and the National Environmental Agency, the WasteLess team hopes to prove the effectiveness of behavioural nudging in managing domestic waste production.</div>
            <br/>
      </container>



    );

}

export default aboutUs;
