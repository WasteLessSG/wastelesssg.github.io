import React from "react";
import Apppicture from "./Apppicture";
import Hardwarepicture from "./Hardwarepicture";
import IntroSolpicture from "./IntroSolpicture";
import {leaderboardsection,homesection,statisticsection} from './AppDescriptions';
import {outersection,innersection} from './HardwareDescriptions'
import {policy,tracking,communities} from './IntroSolDescriptions'

const ourSolution = () => {

    return (
        <container>
        <h1>Our Solution </h1>
            <IntroSolpicture src={tracking.src} description={tracking.headertext} name=" " elaboration={tracking.elaboration}/>
            <IntroSolpicture src={communities.src} description={communities.headertext} name=" " elaboration={communities.elaboration}/>
            <IntroSolpicture src={policy.src} description={policy.headertext} name=" " elaboration={policy.elaboration}/>

        <h2 id="app" > App </h2>
          <text>Our mobile app is designed with usability, usefulness in mind for our users. Monitor wastage and compare your daily performance against neighbours and the nation with our realtime leaderboards.</text>
          <div className='row teamRows'>
            <Apppicture src={homesection.src} description={homesection.headertext} name={homesection.name} elaboration={homesection.elaboration}/>
            <Apppicture src={leaderboardsection.src} description={leaderboardsection.headertext} name={leaderboardsection.name} elaboration={leaderboardsection.elaboration}/>
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
