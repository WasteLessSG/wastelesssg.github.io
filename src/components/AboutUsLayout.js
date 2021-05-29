import react from 'react';


const AboutUsLayout = (props) => {
  return (
  <div className='AboutUsContainer' style={{backgroundColor: props.background}}>

    <div className='left'>
      <a href={props.link}> <img src={props.src} className="about_header_img"/> </a>
      <a href={props.link}> <h3 className="about_header_text" style={{color: 'black'}}> {props.header}</h3> </a>
    </div>

    <div className='right'>
      <h5 className='about_desc'> {props.elaboration} </h5>
      <a href={props.linktwo}> <h3 className= {props.linktwopres ? 'about_link' : 'noAbout_link'}> {props.linktext}</h3> </a>
    </div>

  </div>
)
}

export default AboutUsLayout;
