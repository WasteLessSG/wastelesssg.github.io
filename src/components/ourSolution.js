import React from "react";
import Apppicture from "./Apppicture";
import Hardwarepicture from "./Hardwarepicture";
import {leaderboardsection,historysection,statisticsection} from './AppDescriptions';
import {outersection,innersection} from './HardwareDescriptions'

const ourSolution = () => {

    return (
        <container>
        <h1>Our Solution </h1>
          <h2>A Cleaner, Greener Singapore</h2>
            <text> WasteLess promotes green habits and provides an avenue for Singaporeans to take measurable steps in safeguarding our environment.</text>
          <h2>Track Wastage</h2>
            <text> Monitor personal waste data and trends on an accessible, convenient platform wherever you are.</text>
          <h2>Connect Communities</h2>
            <text> Compete with neighbours and the nation toward the goal of zero waste.</text>
          <h2>Inform Public Waste Management</h2>
            <text> Back up policy decisions with realtime data of waste production from a district to an individual level.</text>

        <h2 id="app" > App </h2>
          <text>Our mobile app is designed with usability, usefulness in mind for our users. Monitor wastage and compare your daily performance against neighbours and the nation with our realtime leaderboards.</text>
          <div className='row teamRows'>
            <Apppicture src={leaderboardsection.src} description={leaderboardsection.headertext} name={leaderboardsection.name} elaboration={leaderboardsection.elaboration}/>
            <Apppicture src={historysection.src} description={historysection.headertext} name={historysection.name} elaboration={historysection.elaboration}/>
            <Apppicture src={statisticsection.src} description={statisticsection.headertext} name={statisticsection.name} elaboration={statisticsection.elaboration}/>
          </div>
            <h2 id="hardware"> Hardware </h2>
            <text> Our Internet-of-Things networked smart chute electronics will be installed on existing rubbish chutes to convert them into WasteLess chutes.</text>
            <div className='row teamRows'>
              <Hardwarepicture src={outersection.src} description={outersection.headertext} name={outersection.name} elaboration={outersection.elaboration}/>
              <Hardwarepicture src={innersection.src} description={innersection.headertext} name={innersection.name} elaboration={innersection.elaboration}/>
            </div>
        </container>
    );

}

export default ourSolution;
