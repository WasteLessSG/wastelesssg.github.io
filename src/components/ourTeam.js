import React from "react";
import TeamPicture from "./teampicture";
import MentorPicture from "./mentorpicture";
import GroupPic from "./../assets/Team_intro.JPG"
import {pradeep,yewchong,ardi,samuel,chris,darren,qien,deliang, raphael, mindy, jiawen} from './teamDescriptions';

const ourTeam = () => {


    return (
        <div className='flex-column '>
            <img className="Sol_intro_pic" src={GroupPic} alt="group pic"/>
            <h1 className='home-title'>Our Team</h1>
            <div className='row teamRows'>
                <TeamPicture src={yewchong.src} description={yewchong.role} cof="Co-Founder" name ={yewchong.fullName} link={yewchong.link} linkpresent = {yewchong.linkpresent}/>
            </div >
            <div className='row teamRows'>
                <TeamPicture src={pradeep.src} description={pradeep.role} cof="Co-Founder" name ={pradeep.fullName} link={pradeep.link} linkpresent = {pradeep.linkpresent}/>
                <TeamPicture src={ardi.src} description={ardi.role} cof="Co-Founder" name ={ardi.fullName} link={ardi.link} linkpresent = {ardi.linkpresent}/>
                <TeamPicture src={chris.src} description={chris.role} cof="Co-Founder" name ={chris.fullName} link={chris.link} linkpresent = {chris.linkpresent}/>
                <TeamPicture src={samuel.src} description={samuel.role} cof="Co-Founder" name ={samuel.fullName} link={samuel.link} linkpresent = {samuel.linkpresent}/>
            </div>
            <h2>Advisors</h2>
            <br/>
            <div className='row teamRows'>
                <MentorPicture src={deliang.src} description={deliang.role} cof="Associate Director (Analytics & Behavioral Change)" name ={deliang.fullName}/>
                <MentorPicture src={mindy.src} description={mindy.role} cof="Assistant Manager (Analytics & Behavioral Change)" name ={mindy.fullName}/>
            </div>
            <h2>Engineering Team</h2>
            <br/>
            <div className='row teamRows'>
                <TeamPicture src={chris.src}  name ={chris.fullName} linkpresent = {chris.linkpresent}/>
                <TeamPicture src={jiawen.src}  name ={jiawen.fullName} linkpresent = {jiawen.linkpresent}/>
            </div>
            <h2>Web and App Development Team</h2>
            <div className='row teamRows'>
                <TeamPicture src={ardi.src} name ={ardi.fullName} linkpresent = {ardi.linkpresent}/>
                <TeamPicture src={qien.src} name ={qien.fullName} linkpresent = {qien.linkpresent}/>
                <TeamPicture src={samuel.src}  name ={samuel.fullName} linkpresent = {samuel.linkpresent}/>

            </div>
            <div className = 'row teamRows'>
                <TeamPicture src={pradeep.src}  name ={pradeep.fullName} linkpresent = {pradeep.linkpresent}/>
                <TeamPicture src={darren.src} name ={darren.fullName} linkpresent = {darren.linkpresent}/>
            </div>
            <h2>Media and Public Relations</h2>
            <div className='row teamRows'>
                <TeamPicture src={samuel.src}  name ={samuel.fullName} linkpresent = {samuel.linkpresent}/>
                <TeamPicture src={raphael.src} name ={raphael.fullName} linkpresent = {raphael.linkpresent}/>
            </div>

        </div>

    );

}

export default ourTeam;
