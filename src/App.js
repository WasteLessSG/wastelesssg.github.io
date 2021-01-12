import React from 'react';
import Footer from './components/footer.js';
import './App.css';
import NavigationBar from "./components/navbar";
import Routes from "./components/Routes";
import {HashRouter as Router} from 'react-router-dom';
import {SocialIcon} from "react-social-icons";
import logo from "./assets/logo.png";


function App() {
  return (
      <body className='inProgress' >

      <div className='container  '>
          <div   className='inProgressContents '>
              <h3> Our new site is
          </h3>
              <h1 className='comingsoontext'> Coming soon
              </h1>
              <h3> Stay Tuned!
              </h3></div>

          <div className='inProgressContents '><img src ={logo} alt='WasteLess Logo' height={50} width={50} className='footerLogo' /></div>
          <div className='row inProgressContents'>

                  <SocialIcon className='socialMediaIcons progressIcons' url="http://instagram.com/wasteless_sg" />
                  <SocialIcon className='socialMediaIcons' url="https://www.linkedin.com/company/wasteless-singapore/" />
                  <SocialIcon className='socialMediaIcons' url="https://github.com/WasteLessSG" />
                  <SocialIcon className='socialMediaIcons' url="mailto:sgwasteless@gmail.com" />


          </div>

      </div>
      </body>
  );
}





// function App() {
//   return (
//       <Router>
//           <div className="App ">
//
//                   <NavigationBar className = 'navigationBar'/>
//                   <Routes className = 'routes'/>
//                   <Footer/>
//
//           </div>
//       </Router>
//   );
// }

export default App;
