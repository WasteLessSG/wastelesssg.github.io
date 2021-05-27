import React from "react";
import TeamPicture from "./teampicture";
import GroupPic from "./../assets/Team_intro.JPG"
import {pradeep,yewchong,ardi,samuel,chris,darren,qien,deliang, raphael, mindy, jiawen} from './teamDescriptions';

const ourTeam = () => {


    return (
        <div className='flex-column '>
            <img className="Sol_intro_pic" src={GroupPic} alt="group pic"/>
            <h1 className='home-title'>Our Team</h1>
            <div className='row teamRows'>
                <TeamPicture src={yewchong.src} description={yewchong.role} cof="Co-Founder" name ={yewchong.fullName}/>
            </div >
            <div className='row teamRows'>
                <TeamPicture src={pradeep.src} description={pradeep.role} cof="Co-Founder" name ={pradeep.fullName}/>
                <TeamPicture src={ardi.src} description={ardi.role} cof="Co-Founder" name ={ardi.fullName}/>
                <TeamPicture src={chris.src} description={chris.role} cof="Co-Founder" name ={chris.fullName}/>
                <TeamPicture src={samuel.src} description={samuel.role} cof="Co-Founder" name ={samuel.fullName}/>
            </div>
            <h2>Advisors</h2>
            <br/>
            <div className='row teamRows'>
                <TeamPicture src={deliang.src} description={deliang.role} cof="Associate Director (Analytics & Behavioral Change)" name ={deliang.fullName}/>
                <TeamPicture src={mindy.src} description={mindy.role} cof="Assistant Manager (Analytics & Behavioral Change)" name ={mindy.fullName}/>
            </div>
            <h2>Engineering Team</h2>
            <br/>
            <div className='row teamRows'>
                <TeamPicture src={chris.src}  name ={chris.fullName}/>
                <TeamPicture src={jiawen.src}  name ={jiawen.fullName}/>
            </div>
            <h2>Web and App Development Team</h2>
            <div className='row teamRows'>
                <TeamPicture src={ardi.src} name ={ardi.fullName}/>
                <TeamPicture src={qien.src} name ={qien.fullName}/>
                <TeamPicture src={samuel.src}  name ={samuel.fullName}/>

            </div>
            <div className = 'row teamRows'>
                <TeamPicture src={pradeep.src}  name ={pradeep.fullName}/>
                <TeamPicture src={darren.src} name ={darren.fullName}/>
            </div>
            <h2>Media and Public Relations</h2>
            <div className='row teamRows'>
                <TeamPicture src={samuel.src}  name ={samuel.fullName}/>
                <TeamPicture src={raphael.src} name ={raphael.fullName}/>
            </div>

        </div>

    );

}

export default ourTeam;
