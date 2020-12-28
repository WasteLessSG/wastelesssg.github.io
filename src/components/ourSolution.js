import React from "react";
import Apppicture from "./Apppicture";
import {leaderboardsection,historysection,statisticsection} from './AppDescriptions';

const ourSolution = () => {

    return (
        <container>
        <h1>Our Solution what is this </h1>
          <h2>A CLEANER, GREENER SINGAPORE</h2>
            <text> WasteLess promotes green habits and provides an avenue for Singaporeans to take measurable steps in safeguarding our environment.</text>
          <h2>TRACK WASTAGE</h2>
            <text> Monitor personal waste data and trends on an accessible, convenient platform wherever you are.</text>
          <h2>CONNECT COMMUNITIES</h2>
            <text> Compete with neighbours and the nation toward the goal of zero waste.</text>
          <h2>INFORM PUBLIC WASTE MANAGEMENT</h2>
            <text> Back up policy decisions with realtime data of waste production from a district to an individual level.</text>
          <h2>WHAT IS BEHAVIOURAL PSYCHOLOGY?</h2>
            <text> Behavioural psychology or behaviourism, is a theory suggesting that the environment shapes human behaviour. In a most basic sense, behavioural psychology is the study and analysis of observable behaviour. This field of psychology influenced thought heavily throughout the middle of the 20th century.</text>

        <h2 id="app" > App </h2>
          <text>Our mobile app is designed with usability, usefulness in mind for our users. Monitor wastage and compare your daily performance against neighbours and the nation with our realtime leaderboards.</text>
          <div className='row teamRows'>
            <Apppicture src={leaderboardsection.src} description={leaderboardsection.headertext} name={leaderboardsection.name} elaboration={leaderboardsection.elaboration}/>
            <Apppicture src={historysection.src} description={historysection.headertext} name={historysection.name} elaboration={historysection.elaboration}/>
            <Apppicture src={statisticsection.src} description={statisticsection.headertext} name={statisticsection.name} elaboration={statisticsection.elaboration}/>
          </div>
            <h2 id="hardware"> Hardware </h2>
            <text> Lorem .</text>
        </container>
    );

}

export default ourSolution;
