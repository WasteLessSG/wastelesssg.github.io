import react from 'react';


const AboutUsLayout = (props) => {
  return (
  <div className='AboutUsContainer'>

    <div className='left'>
      <a href={props.link}> <img src={props.src}/> </a>
      <h3 className="about_header_text"> {props.header}</h3>
    </div>

    <div className='right'>
      <h5 className='about_desc'> {props.description} </h5>
      <a href={props.link} className="about_link"> Learn More.. </a>
    </div>

  </div>
)
}

export default AboutUsLayout;
