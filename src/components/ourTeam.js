import React from "react";
import TeamPicture from "./teampicture";
import {pradeep, yewchong, ardi, samuel, chris, darren, qien, park, deliang,} from './teamDescriptions';

const ourTeam = () => {


    return (
        <div className='flex-column '>
            <h1 className='font-weight-bold'>Our Team</h1>
            <div className='row'>
                <TeamPicture src={yewchong.src} description={yewchong.role} cof="Co-Founder" name ={yewchong.fullName}/>
            </div >
            <div className='row'>
                <TeamPicture src={pradeep.src} description={pradeep.role} cof="Co-Founder" name ={pradeep.fullName}/>
                <TeamPicture src={ardi.src} description={ardi.role} cof="Co-Founder" name ={ardi.fullName}/>
                <TeamPicture src={chris.src} description={chris.role} cof="Co-Founder" name ={chris.fullName}/>
                <TeamPicture src={samuel.src} description={samuel.role} cof="Co-Founder" name ={samuel.fullName}/>
            </div>
            <h2>Advisor</h2>
            <div className='row'>
                <TeamPicture src={deliang.src}  name ={deliang.fullName}/>
            </div>
            <h2>Engineering Team</h2>
            <div className='row'>
                <TeamPicture src={chris.src}  name ={chris.fullName}/>
                <TeamPicture src={park.src}  name ={park.fullName}/>
            </div>
            <h2>Web and App Development Team</h2>
            <div className='row'>
                <TeamPicture src={ardi.src} name ={ardi.fullName}/>
                <TeamPicture src={qien.src} name ={qien.fullName}/>
                <TeamPicture src={darren.src} name ={darren.fullName}/>
                <TeamPicture src={pradeep.src}  name ={pradeep.fullName}/>
                <TeamPicture src={samuel.src}  name ={samuel.fullName}/>
            </div>

        </div>

    );

}

export default ourTeam;